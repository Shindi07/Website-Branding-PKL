// src/components/atoms/ButtonClose.js
import React from "react";

const ButtonClose = ({ onClick }) => {
  return (
    <button className="modal-close" onClick={onClick}>
      &times;
    </button>
  );
};

export default ButtonClose;
