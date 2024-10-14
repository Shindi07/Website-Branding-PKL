import React from 'react';
import "./Logo.css";

const Logo = () => {
  return (
    <a href="#home" className="navbar-logo-link">
      <img src="/img/navbar/satudata.png" alt="Logo" className="navbar-logo" />
      <div className="logo-text">
        Satu Data
        <span className="logo-subtext">Lampung Timur</span>
      </div>
    </a>
  );
};

export default Logo;
