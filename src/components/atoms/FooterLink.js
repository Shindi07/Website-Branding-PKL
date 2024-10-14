// src/components/atoms/FooterLink.js
import React from "react";
import './FooterLink.css';

const FooterLink = ({ label, href }) => {
  return (
    <a href={href} className="footer-link">
      {label}
    </a>
  );
};

export default FooterLink;
