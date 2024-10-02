import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [nip, setNip] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Menggunakan hook untuk navigasi

  const handleLogin = async (e) => {
    e.preventDefault(); // Mencegah reload saat form di-submit
    try {
      const response = await axios.post('http://116.206.212.234:4000/auth/login', {
        nip, // Menggunakan nip di sini
        password,
      });

      if (response.data.token) {
        // Simpan token di localStorage
        localStorage.setItem('token', response.data.token);
        alert('Login berhasil!');
        navigate('/');  // Redirect ke halaman utama setelah login
      }
    } catch (error) {
      console.error('Login gagal', error);
      alert('Login gagal, periksa kembali data Anda.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="NIP" 
          value={nip} 
          onChange={(e) => setNip(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
