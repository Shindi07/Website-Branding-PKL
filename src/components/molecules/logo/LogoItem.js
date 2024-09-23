import React from "react";
import Image from "../../atoms/logo/Image";



const LogoItem = ({ src, alt }) => {
  return (
    <div className="logo-item">
      <Image src={src} alt={alt} />
    </div>
  );
};

export default LogoItem;
