import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Pages/Layout";
import Login from "./components/auth/Login";
import Sektoral from "./components/Pages/Sektoral";
import Register from "./components/auth/Register";
import BukuDigital from "./components/Pages/BukuDigital";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import HalamanError from "./components/Pages/HalamanError"; // Import komponen NotFound
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Layout />} />
        <Route path="/sektoral" element={<Sektoral />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bukudigital" element={<BukuDigital />} />
        <Route path="/login" element={<Login />} /> {/* Route untuk login */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<HalamanError />} /> {/* Route untuk 404 */}
      </Routes>
    </Router>
  );
}

export default App;
