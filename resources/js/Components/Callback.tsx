import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');

    if (code) {
      window.location.href = `http://localhost:8000/callback?code=${code}`;
    } else {
      const accessToken = searchParams.get('access_token');
      const refreshToken = searchParams.get('refresh_token');

      if (accessToken) {
        localStorage.setItem('spotify_access_token', accessToken);
        if (refreshToken) {
          localStorage.setItem('spotify_refresh_token', refreshToken);
        }
        navigate('/');
      } else {
        navigate('/');
      }
    }
  }, [navigate]);

  return <div className="flex justify-center items-center h-screen bg-gray-900">Loading...</div>;
};

export default Callback;