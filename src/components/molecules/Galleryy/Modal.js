import React from "react";
import ButtonClose from "../../atoms/ButtonClose";

const Modal = ({ imageSrc, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <ButtonClose onClick={onClose} />
        <img src={imageSrc} alt="Selected" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
