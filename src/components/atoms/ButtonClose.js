import React from "react";
import "./ButtonClose.css"; 

const ButtonClose = ({ onClick }) => {
  return (
    <button className="modal-close" onClick={onClick}>
      &times;
    </button>
  );
};

export default ButtonClose;
