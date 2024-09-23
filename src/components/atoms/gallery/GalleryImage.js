// src/components/atoms/GalleryImage.js
import React from "react";

const GalleryImage = ({ src, alt }) => {
  return <img src={src} alt={alt} className="gallery-image" />;
};

export default GalleryImage;
