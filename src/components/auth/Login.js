import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../../styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const validCredentials = {
      nip: "197210182000031006",
      password: "123456",
    };

    if (username === validCredentials.nip && password === validCredentials.password) {
      localStorage.setItem("token", "user-token");
      navigate("/home");
    } else {
      alert("Username atau password salah");
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
            placeholder="Username (NIP)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
