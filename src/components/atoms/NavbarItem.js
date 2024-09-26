import React from 'react';
import './NavbarItem.css'; 

const NavbarItem = ({ label, href }) => {
  return (
    <li className="navbar-item"> 
      <a href={href}>{label}</a>
    </li>
  );
};

export default NavbarItem;
