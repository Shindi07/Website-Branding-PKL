import React from 'react';
import './NavbarItem.css'; // Impor file CSS

const NavbarItem = ({ label, href }) => {
  return (
    <li className="navbar-item"> {/* Tambahkan kelas untuk styling */}
      <a href={href}>{label}</a>
    </li>
  );
};

export default NavbarItem;
