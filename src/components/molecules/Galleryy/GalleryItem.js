import React from "react";
import Image from "../../atoms/Image"; // Import komponen Image dari atom

const GalleryItem = ({ src, alt, title, description, onClick }) => {
  return (
    <div className="gallery-item" onClick={onClick}>
      <Image src={src} alt={alt} className="gallery-image" /> {/* Ganti <img> dengan <Image> */}
      <div className="gallery-text">
        <h3 className="gallery-subtitle">{title}</h3>
        <p className="gallery-body-text">{description}</p>
      </div>
    </div>
  );
};

export default GalleryItem;
