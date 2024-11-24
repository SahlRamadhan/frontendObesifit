import axios from "axios"
import { refreshToken } from "./auth.config";
import {jwtDecode} from "jwt-decode";


export const ObesifitApi = axios.create({
    baseURL: "http://localhost:4000/",
    withCredentials: true
});

ObesifitApi.interceptors.request.use(
  async (config) => {
    const token = config.headers.Authorization?.split(" ")[1];

    if (token) {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      // Jika token hampir kedaluwarsa, gunakan refresh token
      if (decoded.exp < currentTime + 60) {
        console.log("Access token hampir kedaluwarsa. Meminta token baru...");
        const response = await refreshToken(); // Panggil endpoint refresh token
        config.headers.Authorization = `Bearer ${response.accessToken}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);


export default ObesifitApi;