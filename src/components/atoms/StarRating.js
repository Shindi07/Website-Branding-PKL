import React from 'react';
import './StarRating.css'; // Impor file CSS


const Star = ({ src, alt }) => {
  return <img src={src} alt={alt} className="testimoni-star" />;
};

export default Star;
