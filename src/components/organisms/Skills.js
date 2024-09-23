import React from "react";
import SkillCard from "../molecules/skills/SkillCard";
import "../../styles/Skills.css"; // Import CSS khusus untuk layout

const Skills = () => {
  return (
    <section id="Skills">
      <div className="skills">
        <div className="skills-content">
          <SkillCard
            src="/img/skills/Product-Design.png"
            alt="Product Design"
            title="Product Design"
            description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          />
          <SkillCard
            src="/img/skills/Visual-Design.png"
            alt="Visual Design"
            title="Visual Design"
            description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          />
          <SkillCard
            src="/img/skills/Art-Direction.png"
            alt="Art Direction"
            title="Art Direction"
            description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
