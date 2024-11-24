import axios from "axios"
import { refreshToken } from "./auth.config";


export const ObesifitApi = axios.create({
    baseURL: "http://localhost:4000/",
    withCredentials: true
});

ObesifitApi.interceptors.request.use(
  async (config) => {
    let token = config.headers.Authorization?.split(" ")[1];

    if (token) {
      // Decode token untuk memeriksa expiration
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime + 60) {
        // Token hampir habis, refresh token
        const response = await refreshToken(); // Memanggil API refresh token
        token = response.accessToken;

        // Tambahkan token baru ke header Authorization
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);


export default ObesifitApi;