import React, { createContext, useContext, useState, useEffect } from "react";
import { loginUser, refreshToken, logoutUser } from "@/services/auth.config";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Untuk validasi awal token

  // Validasi token saat aplikasi pertama kali dimuat
  useEffect(() => {
    const validateToken = async () => {
      try {
        // Panggil API refresh token
        const data = await refreshToken(); // Panggil API refresh token
        if (data?.accessToken && data?.user) {
          setIsAuthenticated(true);
          setUserRole(data.user.role_id);
          setUserData(data.user);
        } else {
          setIsAuthenticated(false);
          setUserRole(null);
          setUserData(null);
        }
      } catch (error) {
        console.error("Validasi token gagal:", error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false); // Validasi selesai
      }
    };

    validateToken();
  }, []);

  const login = async (credentials, expectedRole) => {
    try {
      const data = await loginUser(credentials.email, credentials.password, expectedRole); // Panggil API login
      if (data?.accessToken && data?.user) {
       

        setIsAuthenticated(true);
        setUserRole(data.user.role_id);
        setUserData(data.user);
      } else {
        throw new Error("Login gagal. Data tidak valid.");
      }
    } catch (error) {
      console.error("Login gagal:", error);
      setIsAuthenticated(false);
      setUserRole(null);
      setUserData(null);
      throw error; // Untuk ditangani oleh komponen yang memanggilnya
    }
  };


  // Fungsi untuk logout
  const logout = async () => {
    try {
      await logoutUser(); // Panggil API logout
      setIsAuthenticated(false);
      setUserRole(null);
      setUserData(null);
    } catch (error) {
      console.error("Logout gagal:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userRole,
        userData,
        isLoading, // Status validasi awal
        login, // Tambahkan fungsi login
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
