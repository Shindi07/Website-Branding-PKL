// src/components/atoms/NavbarItem.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavbarItem.css'; // Pastikan Anda  memiliki CSS ini

const NavbarItem = ({ label, href }) => {
  return (
    <li className="navbar-item">
      <NavLink to={href} className="navbar-link" activeClassName="active">
        {label}
      </NavLink>
    </li>
  );
};

export default NavbarItem;
