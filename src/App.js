// src/App.js
import React from "react";
import Navbar from "./components/organisms/Navbar";
import Header from "./components/organisms/Header";
import Logo from "./components/organisms/Logo";
import Skills from "./components/organisms/Skills";
import Gallery from "./components/organisms/Gallery";
import Testimoni from "./components/organisms/Testimoni";
import Kontak from "./components/organisms/Kontak";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Logo />
      <Skills />
      <Gallery />
      <Testimoni />
      <Kontak />
    </div>
  );
}

export default App;
