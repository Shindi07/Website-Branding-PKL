import React from "react";

const Button = ({ href, children }) => {
  return (
    <a href={href} className="button-link">
      {children}
    </a>
  );
};

export default Button;
