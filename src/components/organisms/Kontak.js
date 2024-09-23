// src/Components/organisms/kontak/Kontak.js
import React from 'react';
import Text from '../atoms/kontak/Text';
import SocialMediaIcons from '../molecules/kontak/SocialMediaIcons';
import ContactForm from '../molecules/kontak/ContactForm';
import '../../styles/Kontak.css';
import '../../styles/Header.css';



const Kontak = () => {
  return (
    <section id="Kontak">
      <div className="Kontak-layout">
        <h2 className="judul-kontak">Let's work together</h2>
        <div className="baris-container">
          <div className="baris-1">
            <Text className="kontak-kiri">
              This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
            </Text>
            <SocialMediaIcons />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Kontak;
