import React from "react"; // Mengimpor React
import { Navigate } from "react-router-dom"; // Mengimpor Navigate dari react-router-dom

const ProtectedRoute = ({ children }) => { // Mendeklarasikan komponen ProtectedRoute dengan props children
  const isAuthenticated = !!localStorage.getItem("token"); // Memeriksa apakah token ada di localStorage

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // Mengalihkan ke halaman login jika tidak terautentikasi
  }

  return children; // Menampilkan children jika terautentikasi
};

export default ProtectedRoute; // Mengekspor komponen ProtectedRoute
