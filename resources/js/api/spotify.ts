import axios from "axios";

const API_URL = "http://localhost:8000";

export const getLoginUrl = async () => {
    const res = await axios.get(`${API_URL}/spotify/login`);
    return res.data.url;
};

export const getTracks = async (token: string) => {
    const res = await axios.get(`${API_URL}/spotify/tracks`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
};

export const playTrack = async (token: string, uri: string) => {
    await axios.post(
        `${API_URL}/spotify/play`,
        { uri },
        {
            headers: { Authorization: `Bearer ${token}` },
        }
    );
    
};

export const refreshToken = async (refreshToken: string) => {
    const res = await axios.post(`${API_URL}/spotify/refresh`, { refresh_token: refreshToken });
    return res.data;
};
