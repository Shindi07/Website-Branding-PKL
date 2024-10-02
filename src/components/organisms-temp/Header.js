import React from "react";
import BrandingSection from "../molecules/Header/BrandingSection";
import ContactLink from "../molecules/Header/ContactLink";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import "../../styles/Header.css";

const HeaderContent = () => {
  return (
    <section id="Header">
      <div className="layout">
        <div className="text-section">
          <BrandingSection />
          <Text className="description">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </Text>
          <ContactLink />
        </div>
        <div className="image-section">
          <Image src="/img/header/Header.png" alt="Visual" />
        </div>
      </div>
    </section>
  );
};

export default HeaderContent;
