import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:3333/',
  headers: {
    'Content-type': 'application/json',
  },
});

export default api;
