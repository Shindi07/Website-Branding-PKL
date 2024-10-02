import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"; // Mengimpor useNavigate
import Navbar from "./components/organisms-temp/Navbar";
import Header from "./components/organisms-temp/Header";
import Logo from "./components/organisms-temp/Logo";
import Skills from "./components/organisms-temp/Skills";
import Gallery from "./components/organisms-temp/Gallery";
import Testimoni from "./components/organisms-temp/Testimoni";
import Kontak from "./components/organisms-temp/Kontak";
import Login from "./components/Pages/Login"; // Mengimpor Login
import Register from "./components/Pages/Register"; // Mengimpor Register
import ProtectedRoute from "./components/ProtectedRoute"; // Mengimpor ProtectedRoute
import "./App.css"

// Komponen LandingPage untuk halaman utama
const LandingPage = () => {
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleLogout = () => {
    localStorage.removeItem("token"); // Hapus token dari localStorage
    navigate("/login"); // Redirect ke halaman login
  };

  return (
    <>
      <Navbar onLogout={handleLogout} /> {/* Mengirimkan handleLogout */}
      <Header />
      <Logo />
      <Skills />
      <Gallery />
      <Testimoni />
      <Kontak />
    </>
  );
};


// Komponen utama App
function App() {
  return (
    <Router>
      <Routes>
        {/* Route untuk halaman Login */}
        <Route path="/login" element={<Login />} />

        {/* Route untuk halaman Register */}
        <Route path="/register" element={<Register />} />

        {/* Protected Route untuk Landing Page */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <LandingPage />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
