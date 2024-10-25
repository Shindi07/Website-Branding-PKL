import React from "react";
import "./Button.css";

const Button = ({ href, children, className }) => {
  return (
    <a href={href} className={`button-link ${className}`}>
      {children}
    </a>
  );
};

export default Button;
