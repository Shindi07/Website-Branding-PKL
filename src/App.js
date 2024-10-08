// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Pages/Layout"; // Import layout yang baru dibuat
import Login from "./components/Pages/Login";
import Sektoral from "./components/Pages/Sektoral";
import Register from "./components/Pages/Register";
import BukuDigital from "./components/Pages/BukuDigital";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {
  const handleLogout = () => {
    localStorage.removeItem("token"); // Menghapus token saat logout
    window.location.href = "/login"; // Redirect ke login setelah logout
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sektoral" element={<Sektoral />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bukudigital" element={<BukuDigital />} />
        <Route path="/bukudigital" element={<BukuDigital />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout onLogout={handleLogout}>
                {/* Halaman konten utama ditampilkan di sini */}
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
