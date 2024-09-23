// src/components/organisms/Navbar.js
import React from "react";
import Logo from "../atoms/navbar/Logo"; // Path ke Logo.js di atoms/navbar
import NavbarMenu from "../molecules/navbar/NavbarMenu"; // Path ke NavbarMenu.js di molecules/navbar
import "../../styles/Navbar.css"; // Path ke CSS di styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Logo />
      </div>
      <NavbarMenu />
    </nav>
  );
};

export default Navbar;
