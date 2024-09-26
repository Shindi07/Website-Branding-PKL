import React from "react";
import "../../styles/Logo.css"; 
import LogoItem from "../molecules/Logo/LogoItem";

const LogoSection = () => {
  return (
    <div className="logo-section">
      <LogoItem src="/img/logo/Google.png" alt="Google Logo" />
      <LogoItem src="/img/logo/Nike.png" alt="Nike Logo" />
      <LogoItem src="/img/logo/Samsung.png" alt="Samsung Logo" />
      <LogoItem src="/img/logo/Apple.png" alt="Apple Logo" />
      <LogoItem src="/img/logo/Adidas.png" alt="Adidas Logo" />
    </div>
  );
};

export default LogoSection;
