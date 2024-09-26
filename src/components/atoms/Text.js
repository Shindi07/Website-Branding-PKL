import React from "react";
import './NavbarItem.css'; 

const Text = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Text;
