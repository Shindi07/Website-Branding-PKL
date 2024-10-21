import React from "react";
import Logo from "../atoms/Logo"; 
import NavbarMenu from "../molecules/navbarr/NavbarMenu"; 
import "../../styles/Navbar.css"; 

const Navbar = ({ onLogout }) => {  // Pastikan onLogout didefinisikan di sini
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Logo />
      </div>
    
      <NavbarMenu onLogout={onLogout} />
    </nav>
  );
};

export default Navbar;
