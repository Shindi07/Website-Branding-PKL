import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token");

  if (!isAuthenticated) {
    return <Navigate to="/home" replace />; // Redirect ke halaman login jika tidak terautentikasi
  }

  return children; // Tampilkan children jika terautentikasi
};

export default ProtectedRoute;
