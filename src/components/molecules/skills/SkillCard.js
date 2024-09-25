import React from "react";
import Image from "../../atoms/Image";
import Subtitle from "../../atoms/Subtitle";

import Text from "../../atoms/Text";

const SkillCard = ({ src, alt, subtitle, description }) => {
  return (
    <div className="skill-card">
      <Image src={src} alt={alt} className="skill-image" />
      <Subtitle className="subtitle" subtitle={subtitle} /> {/* Pastikan properti subtitle digunakan dengan benar */}
      <Text className="skill-description">{description}</Text>
    </div>
  );
};


export default SkillCard;
