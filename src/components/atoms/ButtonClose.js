import React from "react";
import "./ButtonClose.css"; // Hapus './' jika file berada di folder yang sama

const ButtonClose = ({ onClick }) => {
  return (
    <button className="modal-close" onClick={onClick}>
      &times;
    </button>
  );
};

export default ButtonClose;
