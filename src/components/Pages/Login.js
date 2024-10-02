import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert
import "../../styles/Login.css"; // Import CSS biasa

const Login = () => {
  const [nip, setNip] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://116.206.212.234:4000/auth/login",
        { nip, password }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        Swal.fire({ // Ganti alert dengan SweetAlert
          title: "Login Berhasil!",
          text: "Selamat datang kembali!",
          icon: "success",
          confirmButtonText: "OK"
        });
        navigate("/");
      }
    } catch (error) {
      console.error("Login gagal", error);
      Swal.fire({ // Ganti alert dengan SweetAlert
        title: "Login Gagal",
        text: "Periksa kembali data Anda.",
        icon: "error",
        confirmButtonText: "OK"
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            className="login-input"
            type="text"
            placeholder="NIP"
            value={nip}
            onChange={(e) => setNip(e.target.value)}
            required
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;