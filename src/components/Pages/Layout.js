// src/components/Layout/Layout.js

import React from "react";
import Navbar from "../organisms-temp/Navbar";
import Header from "../organisms-temp/Header";
import Logo from "../organisms-temp/Logo";
import Skills from "../organisms-temp/Skills";
import Gallery from "../organisms-temp/Gallery";
import Testimoni from "../organisms-temp/Testimoni";
import Kontak from "../organisms-temp/Kontak";
import Footer from "../organisms-temp/Footer";

const Layout = ({ children, onLogout }) => {
  return (
    <>
      <Navbar onLogout={onLogout} />
      <Header />
      <Logo />
      <Skills />
      <Gallery />
      <Testimoni />
      <Kontak />
      <Footer />
     

      <div>{children}</div> {/* Menampilkan konten dinamis (anak komponen) */}
    </>
  );
};

export default Layout;
