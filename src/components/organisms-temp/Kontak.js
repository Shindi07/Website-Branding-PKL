import React from 'react';
import Text from '../atoms/Text';
import SocialMediaIcon from '../molecules/kontak/SocialMediaIcon';
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
            <SocialMediaIcon />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Kontak;
