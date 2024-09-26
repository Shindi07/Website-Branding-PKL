import React from "react";
import SkillCard from "../molecules/Skills/SkillCard";
import "../../styles/Skills.css";

const Skills = () => {
  return (
    <section id="Skills">
      <div className="skills">
        <div className="skills-content">
          <SkillCard
            src="/img/skills/Product-Design.png"
            alt="Product Design"
            subtitle="Product Design"  
            description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          />
          <SkillCard
            src="/img/skills/Visual-Design.png"
            alt="Visual Design"
            subtitle="Visual Design"  
            description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          />
          <SkillCard
            src="/img/skills/Art-Direction.png"
            alt="Art Direction"
            subtitle="Art Direction"  
            description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
