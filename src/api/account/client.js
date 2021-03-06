import axios from 'axios';

const baseURL = 'http://localhost:8080';

const client = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
  },
});

client.interceptors.response.use(
  (response) => response,
);

export default client;
