import React, { useEffect, useState } from 'react';
import { getTracks, refreshToken } from '@/api/spotify';
import SpotifyPlayer from 'react-spotify-web-playback';

interface Track {
  id: string;
  name: string;
  artists: { name: string }[];
  album: { images: { url: string }[] };
  uri: string;
}

const SpotifyPlayerComponent: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('spotify_access_token'));
  const [storedRefreshToken, setStoredRefreshToken] = useState<string | null>(localStorage.getItem('spotify_refresh_token'));

  useEffect(() => {
    if (token) {
      fetchTracks(token);
    }
  }, [token]);

  const fetchTracks = async (token: string) => {
    try {
      const data = await getTracks(token);
      setTracks(data.items || []);
    } catch (error) {
      if (error instanceof Error && (error as any).response?.status === 401 && storedRefreshToken) {
        const newTokenData = await refreshToken(storedRefreshToken);
        setToken(newTokenData.access_token);
        localStorage.setItem('spotify_access_token', newTokenData.access_token);
        fetchTracks(newTokenData.access_token);
      } else {
        console.error('Error fetching tracks:', error);
      }
    }
  };

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8">My Spotify Tracks</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer"
            onClick={() => setCurrentTrack(track.uri)}
          >
            <img
              src={track.album.images[0].url}
              alt={track.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">{track.name}</h2>
            <p className="text-gray-400">
              {track.artists.map((artist) => artist.name).join(', ')}
            </p>
          </div>
        ))}
      </div>

      {currentTrack && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 shadow-lg">
          <SpotifyPlayer
            token={token}
            uris={[currentTrack]}
            styles={{
              activeColor: '#1db954',
              bgColor: '#181818',
              color: '#ffffff',
              loaderColor: '#1db954',
              sliderColor: '#1db954',
              trackArtistColor: '#b3b3b3',
              trackNameColor: '#ffffff',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SpotifyPlayerComponent;