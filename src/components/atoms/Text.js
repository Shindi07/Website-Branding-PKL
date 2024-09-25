import React from "react";
import './NavbarItem.css'; // Impor file CSS

const Text = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Text;
