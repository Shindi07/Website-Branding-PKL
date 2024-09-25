import React from 'react';
import "./Avatar.css"

const Avatar = ({ src, alt }) => {
  return <img src={src} alt={alt} className="testimoni-avatar" />;
};

export default Avatar;
