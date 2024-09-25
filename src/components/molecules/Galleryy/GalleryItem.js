// src/components/molecules/GalleryItem.js
import React from "react";

const GalleryItem = ({ src, alt, title, description, onClick }) => {
  return (
    <div className="gallery-item" onClick={onClick}>
      <img src={src} alt={alt} className="gallery-image" />{" "}
      {/* Menambahkan class langsung di sini */}
      <div className="gallery-text">
        <h3 className="gallery-subtitle">{title}</h3>
        <p className="gallery-body-text">{description}</p>
      </div>
    </div>
  );
};

export default GalleryItem;
