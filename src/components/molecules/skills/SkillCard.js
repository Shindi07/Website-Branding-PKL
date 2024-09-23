import React from "react";
import SkillImage from "../../atoms/skills/SkillImage";
import SkillTitle from "../../atoms/skills/SkillTitle";
import SkillDescription from "../../atoms/skills/SkillDescription";

const SkillCard = ({ src, alt, title, description }) => {
  return (
    <div className="skill-card">
      <SkillImage src={src} alt={alt} />
      <SkillTitle title={title} />
      <SkillDescription>{description}</SkillDescription>
    </div>
  );
};

export default SkillCard;
