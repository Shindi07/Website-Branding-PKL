import React from 'react';
import TestimoniTitle from '../atoms/testimoni/TestimoniTitle';
import TestimoniText from '../atoms/testimoni/TestimoniText';
import TestimoniFooter from '../molecules/testimoni/TestimoniFooter'; // Perbaiki jika folder molecules digunakan
import  '../../styles/Testimoni.css'; // Perbaiki jika folder molecules digunakan


const TestimoniOrganism = () => {
  return (
    <section id="Testimoni">
      <div className="testimoni">
        <TestimoniTitle title="Testimonial" />
        <div className="testimoni-content">
          <div className="testimoni-item">
            <TestimoniText text="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com" />
            <TestimoniFooter avatarSrc="/img/testimoni/Client Image.png" avatarAlt="Avatar 1" nama="Gemma Nolen" company="Google" />
          </div>

          <div className="testimoni-item">
            <TestimoniText text="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com" />
            <TestimoniFooter avatarSrc="/img/testimoni/Client Image.png" avatarAlt="Avatar 1" nama="Gemma Nolen" company="Google" />
          </div>

          <div className="testimoni-item">
            <TestimoniText text="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com" />
            <TestimoniFooter avatarSrc="/img/testimoni/Client Image.png" avatarAlt="Avatar 1" nama="Gemma Nolen" company="Google" />
          </div>
          <div className="testimoni-item">
            <TestimoniText text="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com" />
            <TestimoniFooter avatarSrc="/img/testimoni/Client Image.png" avatarAlt="Avatar 1" nama="Gemma Nolen" company="Google" />
          </div>
          <div className="testimoni-item">
            <TestimoniText text="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com" />
            <TestimoniFooter avatarSrc="/img/testimoni/Client Image.png" avatarAlt="Avatar 1" nama="Gemma Nolen" company="Google" />
          </div>
          <div className="testimoni-item">
            <TestimoniText text="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com" />
            <TestimoniFooter avatarSrc="/img/testimoni/Client Image.png" avatarAlt="Avatar 1" nama="Gemma Nolen" company="Google" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimoniOrganism;
