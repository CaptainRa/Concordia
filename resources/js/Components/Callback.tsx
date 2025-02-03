import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Callback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get('code');

  if (code) {
    axios
      .get(`http://localhost:8000/spotify/callback?code=${code}`)
      .then((response) => {
        const accessToken = response.data.access_token;
        const refreshToken = response.data.refresh_token;
        localStorage.setItem('spotify_access_token', accessToken);
        localStorage.setItem('spotify_refresh_token', refreshToken);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error fetching token:', error);
        navigate('/');
      });
  } else {
    navigate('/');
  }
}, [navigate]);

  return <div className="flex justify-center items-center h-screen bg-gray-900">Loading...</div>;
};

export default Callback;