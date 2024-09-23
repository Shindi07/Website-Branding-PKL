// src/components/molecules/navbar/NavbarMenu.js
import React from "react";
import NavbarItem from "../../atoms/navbar/NavbarItem";

const NavbarMenu = () => {
  return (
    <ul className="navbar-menu">
      <NavbarItem label="Home" href="#Header" />
      <NavbarItem label="About" href="#Skills" />
      <NavbarItem label="Work" href="#Testimoni" />
      <NavbarItem label="Contact" href="#Kontak" />
    </ul>
  );
};

export default NavbarMenu;
