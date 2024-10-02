import React from "react";
import NavbarItem from "../../atoms/NavbarItem";

const NavbarMenu = ({ onLogout }) => {
  return (
    <ul className="navbar-menu">
      <NavbarItem label="Home" href="#Header" />
      <NavbarItem label="About" href="#Skills" />
      <NavbarItem label="Work" href="#Testimoni" />
      <NavbarItem label="Contact" href="#Kontak" />
      {/* Tambahkan tombol Logout di sini */}
      <li>
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </li>
    </ul>
  );
};

export default NavbarMenu;
