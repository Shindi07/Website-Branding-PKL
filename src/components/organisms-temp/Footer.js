// src/components/organisms/Footer.js
import React from "react";
import FooterLinksGroup from "../molecules/footer/FooterLinksGroup";
import FooterText from "../atoms/FooterText";
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <FooterLinksGroup />
      <FooterText text="© By Shindi Cahyandari. All rights reserved." />
    </footer>
  );
};

export default Footer;
