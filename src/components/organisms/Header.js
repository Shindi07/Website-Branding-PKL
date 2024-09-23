import React from "react";
import BrandingSection from "../molecules/header/BrandingSection";
import Description from "../molecules/header/Description";
import ContactLink from "../molecules/header/ContactLink";
import Image from "../atoms/header/Image";
import "../../styles/Header.css"; // Path ke CSS di styles

const HeaderContent = () => {
  return (
    <div className="layout">
      <div className="text-section">
        <BrandingSection />
        <Description />
        <ContactLink />
      </div>
      <div className="image-section">
        <Image src="/img/header/Header.png" alt="Visual" />
      </div>
    </div>
  );
};

export default HeaderContent;
