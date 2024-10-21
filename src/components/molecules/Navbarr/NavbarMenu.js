import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import NavbarItem from "../../atoms/NavbarItem";

const NavbarMenu = () => {
  const [loggedOut, setLoggedOut] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Hapus token autentikasi
    setLoggedOut(true); // Set state untuk redirect setelah logout
  };

  if (loggedOut) {
    return <Navigate to="/login" replace />; // Redirect ke halaman login setelah logout
  }

  return (
    <ul className="navbar-menu">
      <NavbarItem label="Home" href="/home" />
      <NavbarItem label="Sektoral" href="/sektoral" />
      <NavbarItem label="Buku Digital" href="/bukudigital" />
      <NavbarItem label="Dataset" href="/dataset" />
      <li>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </li>
    </ul>
  );
};

export default NavbarMenu;
