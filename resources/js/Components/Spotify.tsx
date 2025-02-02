import { useEffect, useState } from "react";
import { getLoginUrl, getTracks, playTrack, refreshToken } from "@/api/spotify";

const SpotifyPlayer = () => {
  const [token, setToken] = useState<string | null>(null);
  const [storedRefreshToken, setStoredRefreshToken] = useState<string | null>(null);
  const [tracks, setTracks] = useState<any[]>([]);

  useEffect(() => {
    const hash = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = hash.get("access_token");
    const refreshToken = hash.get("refresh_token");

    if (accessToken) {
      setToken(accessToken);
      setStoredRefreshToken(refreshToken);
      localStorage.setItem("spotify_access_token", accessToken);
      localStorage.setItem("spotify_refresh_token", refreshToken || "");
      fetchTracks(accessToken);
    } else {
      const storedToken = localStorage.getItem("spotify_access_token");
      const storedRefreshToken = localStorage.getItem("spotify_refresh_token");
      if (storedToken) {
        setToken(storedToken);
        setStoredRefreshToken(storedRefreshToken);
        fetchTracks(storedToken);
      }
    }
  }, []);

  const fetchTracks = async (token: string) => {
    try {
      const data = await getTracks(token);
      setTracks(data.items || []);
    } catch (error) {
        if (error instanceof Error && (error as any).response?.status === 401 && storedRefreshToken) {
            const newTokenData = await refreshToken(storedRefreshToken);
            setToken(newTokenData.access_token);
            localStorage.setItem("spotify_access_token", newTokenData.access_token);
            fetchTracks(newTokenData.access_token);
        }
    }
  };

  const handleLogin = async () => {
    const url = await getLoginUrl();
    window.location.href = url;
  };

  const handlePlay = async (uri: string) => {
    if (!token) return;
    try {
      await playTrack(token, uri);
    } catch (error) {
      if (error instanceof Error && (error as any).response?.status === 401 && storedRefreshToken) {
        const newTokenData = await refreshToken(storedRefreshToken);
        setToken(newTokenData.access_token);
        localStorage.setItem("spotify_access_token", newTokenData.access_token);
        await playTrack(newTokenData.access_token, uri);
      }
    }
  };
  console.log(token);
  console.log(tracks);

  return (
    <div className="p-5">
      {!token ? (
        <button onClick={handleLogin} className="bg-green-500 text-white p-2 rounded">
          Login with Spotify
        </button>
      ) : (
        <div>
          <h2 className="text-xl font-bold">Your Top Tracks</h2>
          <ul>
            {tracks.map((track) => (
              <li key={track.id} className="flex items-center gap-4">
                <img src={track.album.images[0].url} alt={track.name} width={50} />
                <div>
                  <p>{track.name}</p>
                  <p className="text-sm text-gray-500">{track.artists[0].name}</p>
                </div>
                <button
                  onClick={() => handlePlay(track.uri)}
                  className="ml-auto bg-blue-500 text-white p-1 rounded"
                >
                  Play
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SpotifyPlayer;