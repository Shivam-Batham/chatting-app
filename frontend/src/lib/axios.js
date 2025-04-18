import axios from "axios";
import { ExpresBaseUrl } from "../constants";
import Cookies from 'js-cookie'; 

export const axiosInstance = axios.create({
  baseURL: ExpresBaseUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('jwt'); 
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);