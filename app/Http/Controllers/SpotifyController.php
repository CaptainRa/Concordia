<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Http;

class SpotifyController extends Controller
{
    private $client_id;
    private $client_secret;
    private $redirect_uri;

    public function __construct()
    {
        $this->client_id = env('SPOTIFY_CLIENT_ID');
        $this->client_secret = env('SPOTIFY_CLIENT_SECRET');
        $this->redirect_uri = env('SPOTIFY_REDIRECT_URI');
    }

    public function login()
    {
        $scopes = "streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state user-read-currently-playing user-top-read";
        $url = "https://accounts.spotify.com/authorize?client_id={$this->client_id}&response_type=code&redirect_uri={$this->redirect_uri}&scope={$scopes}";
        return response()->json(['url' => $url]);
    }

    
    public function callback(Request $request)
    {
        $code = $request->query('code');

        $client_id = env('SPOTIFY_CLIENT_ID');
        $client_secret = env('SPOTIFY_CLIENT_SECRET');
        $redirect_uri = env('SPOTIFY_REDIRECT_URI');

        $response = Http::asForm()->post('https://accounts.spotify.com/api/token', [
            'grant_type' => 'authorization_code',
            'code' => $code,
            'redirect_uri' => $redirect_uri,
            'client_id' => $client_id,
            'client_secret' => $client_secret,
        ]);

        if ($response->failed()) {
            return response()->json(['error' => 'Failed to get access token'], 500);
        }

        $data = $response->json();
        $accessToken = $data['access_token'];
        $refreshToken = $data['refresh_token'];

        return redirect('/')->withFragment("access_token={$accessToken}&refresh_token={$refreshToken}");
    }

    public function refreshToken(Request $request)
    {
        $refresh_token = $request->input('refresh_token');

        if (!$refresh_token) {
            return response()->json(['error' => 'Refresh token not found'], 400);
        }

        $response = Http::asForm()->post('https://accounts.spotify.com/api/token', [
            'grant_type' => 'refresh_token',
            'refresh_token' => $refresh_token,
            'client_id' => $this->client_id,
            'client_secret' => $this->client_secret,
        ]);

        if ($response->failed()) {
            return response()->json(['error' => 'Failed to refresh access token'], 500);
        }

        $data = $response->json();
        return response()->json($data);
    }

    public function getTracks(Request $request)
    {
        $accessToken = $request->bearerToken();
        \Log::info('Access Token:', ['token' => $accessToken]); // Log the token

        if (!$accessToken) {
            return response()->json(['error' => 'Access token missing'], 400);
        }

        $response = Http::withToken($accessToken)->get('https://api.spotify.com/v1/me/top/tracks');

        if ($response->failed()) {
            return response()->json([
                'error' => 'Failed to fetch tracks',
                'spotify_response' => $response->json()
            ], $response->status());
        }

        return response()->json($response->json());
    }

    public function playTrack(Request $request)
    {
        $access_token = $request->header('Authorization');
        $track_uri = $request->input('track_uri');

        $response = Http::withHeaders([
            'Authorization' => "Bearer $access_token",
            'Content-Type' => 'application/json',
        ])->put('https://api.spotify.com/v1/me/player/play', [
            'uris' => [$track_uri]
        ]);

        return $response->json();
    }
}
