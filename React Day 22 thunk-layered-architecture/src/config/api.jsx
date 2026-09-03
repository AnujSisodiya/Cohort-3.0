import axios from 'axios';

export const api = axios.create({
  baseUrl: 'https://dummyjson.com',
  withCredentials: true,
});
