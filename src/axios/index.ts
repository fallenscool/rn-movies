import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  responseType: 'json',
});

export default axiosMiddleware(client);
