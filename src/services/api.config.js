import axios from "axios";
import { refreshToken } from "./auth.config"; // Import refreshToken
import { jwtDecode } from "jwt-decode"; // Untuk decode token

export const ObesifitApi = axios.create({
  baseURL: "http://localhost:4000/",
  withCredentials: true, // Membawa cookies
});

ObesifitApi.interceptors.request.use(
  async (config) => {
    // Ambil token dari header Authorization
    let token = config.headers.Authorization?.split(" ")[1]; // Cek Authorization header

    if (token) {
      const decoded = jwtDecode(token); // Decode token untuk cek expiry
      const currentTime = Date.now() / 1000; // Waktu saat ini dalam detik

      // Jika token hampir kedaluwarsa, refresh token
      if (decoded.exp < currentTime + 60) {
        console.log("Access token hampir kedaluwarsa. Meminta token baru...");

        try {
          // Refresh token dan dapatkan access token yang baru
          const response = await refreshToken();
          token = response.accessToken; // Dapatkan access token terbaru

          // Set header Authorization dengan token yang baru
          config.headers.Authorization = `Bearer ${token}`;
        } catch (error) {
          console.error("Gagal me-refresh token:", error);
          throw new Error("Gagal me-refresh token");
        }
      }
    }

    return config; // Lanjutkan request dengan header yang sudah diubah
  },
  (error) => {
    console.error("Terjadi kesalahan pada request:", error);
    return Promise.reject(error); // Lemparkan error untuk ditangani di komponen yang memanggilnya
  }
);

export default ObesifitApi;
