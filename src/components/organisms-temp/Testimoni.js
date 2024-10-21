import React from "react";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import TestimoniFooter from "../molecules/testimoni/TestimoniFooter";
import "../../styles/Testimoni.css";

const TestimoniOrganism = () => {
  return (
    <section id="Testimoni">
      <div className="testimoni">
        <Title title="Testimonial" />
        <div className="testimoni-content">
          <div className="testimoni-item">
            <Text className="testimoni-text">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </Text>
            <TestimoniFooter
              avatarSrc="/img/testimoni/Client Image.png"
              avatarAlt="Avatar 1"
              nama="Gemma Nolen"
              company="Google"
            />
          </div>

          <div className="testimoni-item">
            <Text className="testimoni-text">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </Text>
            <TestimoniFooter
              avatarSrc="/img/testimoni/Client Image.png"
              avatarAlt="Avatar 1"
              nama="Gemma Nolen"
              company="Google"
            />
          </div>
          <div className="testimoni-item">
            <Text className="testimoni-text">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </Text>
            <TestimoniFooter
              avatarSrc="/img/testimoni/Client Image.png"
              avatarAlt="Avatar 1"
              nama="Gemma Nolen"
              company="Google"
            />
          </div>
          <div className="testimoni-item">
            <Text className="testimoni-text">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </Text>
            <TestimoniFooter
              avatarSrc="/img/testimoni/Client Image.png"
              avatarAlt="Avatar 1"
              nama="Gemma Nolen"
              company="Google"
            />
          </div>
          <div className="testimoni-item">
            <Text className="testimoni-text">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </Text>
            <TestimoniFooter
              avatarSrc="/img/testimoni/Client Image.png"
              avatarAlt="Avatar 1"
              nama="Gemma Nolen"
              company="Google"
            />
          </div>
          <div className="testimoni-item">
            <Text className="testimoni-text">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </Text>
            <TestimoniFooter
              avatarSrc="/img/testimoni/Client Image.png"
              avatarAlt="Avatar 1"
              nama="Gemma Nolen"
              company="Google"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimoniOrganism;
