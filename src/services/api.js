import axios from 'axios';

const api = axios.create({
  baseURL: 'http://0a7748b1.ngrok.io',
  // baseURL: 'http://localhost:3333',
});

export default api;
