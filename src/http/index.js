import axios from 'axios';

export const API_URL = process.env.REACT_APP_API_URL;

const $api = axios.create({
  withCredentials: false,
  baseURL: API_URL,
});

$api.interceptors.request.use(config => {
  const userToken = localStorage.getItem('userToken');
  if (userToken) {
    config.headers.Authorization = `Bearer ${userToken}`;
  }
  return config;
});

export default $api;
