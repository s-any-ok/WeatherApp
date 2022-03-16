import axios from 'axios';
import configs from '../configs/configs';

const api = axios.create({
  baseURL: configs.baseUrl,
  headers: {
    ...configs.headers,
  },
});

export default api;
