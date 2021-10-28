import axios from 'axios';

const baseURL = process.env.VUE_APP_GLA_ASSESSMENT_API_HOST;

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
