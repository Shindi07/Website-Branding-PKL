import React from "react";
import "./Button.css"

const Button = ({ href, children }) => {
  return (
    <a href={href} className="button-link">
      {children}
    </a>
  );
};

export default Button;
