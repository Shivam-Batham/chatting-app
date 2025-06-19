import axios from "axios";
import { ExpresBaseUrl } from "../constants";

export const axiosInstance = axios.create({
  baseURL: ExpresBaseUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});


axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
