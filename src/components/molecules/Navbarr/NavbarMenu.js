// src/components/organisms-temp/NavbarMenu.js

import React from "react";
import { Link } from "react-router-dom"; // Import Link dari react-router-dom

const NavbarMenu = ({ onLogout }) => {
  return (
    <ul className="navbar-menu">
      {/* Gunakan Link untuk mengarahkan ke halaman berbeda */}
      <li>
        <Link to="/" className="navbar-item">Home</Link>
      </li>
      <li>
        <Link to="/sektoral" className="navbar-item">Sektoral</Link>
      </li>
      <li>
        <Link to="/bukudigital" className="navbar-item">Buku Digital</Link>
      </li>
      <li>
      </li>
      {/* Tambahkan tombol Logout */}
      <li>
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </li>
    </ul>
  );
};

export default NavbarMenu;
