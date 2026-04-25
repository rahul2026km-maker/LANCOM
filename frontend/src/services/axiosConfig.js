import axios from 'axios';

const API = axios.create({
  baseURL: 'https://thick-ties-draw.loca.lt/api',
  headers: {
    'ngrok-skip-browser-warning': 'true',
    'bypass-tunnel-reminder': 'true' // For localtunnel
  }
});

// Automatically add token to every request
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;