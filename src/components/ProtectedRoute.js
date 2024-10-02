import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  // Jika tidak ada token, redirect ke halaman login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Jika ada token, izinkan akses ke halaman yang dilindungi
  return children;
};

export default ProtectedRoute;
