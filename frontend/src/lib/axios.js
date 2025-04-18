import axios from "axios";
import { ExpresBaseUrl } from "../constants";

export const axiosInstance = axios.create({
  baseURL: ExpresBaseUrl,
  withCredentials: true,
});
