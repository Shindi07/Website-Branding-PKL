import React from "react";
import Logo from "../atoms/Logo"; 
import NavbarMenu from "../molecules/Navbarr/NavbarMenu"; 
import "../../styles/Navbar.css"; 

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
