// src/components/molecules/GalleryItem.js
import React from "react";
import GalleryImage from "../../atoms/gallery/GalleryImage";

const GalleryItem = ({ src, alt, title, description, onClick }) => {
  return (
    <div className="gallery-item" onClick={onClick}>
      <GalleryImage src={src} alt={alt} />
      <div className="gallery-text">
        <h3 className="gallery-subtitle">{title}</h3>
        <p className="gallery-body-text">{description}</p>
      </div>
    </div>
  );
};

export default GalleryItem;
