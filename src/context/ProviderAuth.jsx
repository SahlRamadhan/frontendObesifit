// ProtectedRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export const ProtectedRoute = ({ children, role }) => {
  const { isAuthenticated, isLoading, userRole } = useAuth();
  const location = useLocation();

  // Tampilkan loading jika sedang memvalidasi
  if (isLoading) {
    return <div>Loading...</div>; // Bisa diganti dengan spinner atau komponen lain
  }

  // Jika belum login
  if (!isAuthenticated) {
    if (location.pathname.startsWith("/homeuser")) {
      return <Navigate to="/login" replace />;
    }
    if (location.pathname.startsWith("/homedokter")) {
      return <Navigate to="/login-dokter" replace />;
    }
    if (location.pathname.startsWith("/homeadmin")) {
      return <Navigate to="/login-admin" replace />;
    }
  }

  // Jika role tidak sesuai
  if (role && role !== userRole) {
    console.log("Role tidak sesuai. Redirecting ke halaman Unauthorized.");
    return <Navigate to="/404" state={{ from: location, role: userRole }} replace />; // Arahkan ke halaman Unauthorized jika role tidak sesuai
  }

  // Jika login dan role sesuai, render halaman
  return children;
};
