import axios from 'axios';
import { REACT_APP_API_URL } from '../config';

const axiosInstance = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;
