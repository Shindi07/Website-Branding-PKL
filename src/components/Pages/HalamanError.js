import React from "react";
import { Link } from "react-router-dom"; // Import Link untuk navigasi
import Image from "../atoms/Image"; // Import komponen Image dari atom
import GalleryTitle from "../atoms/Title"; // Import komponen GalleryTitle untuk judul
import "../../styles/Error.css"; // Impor CSS untuk halaman error

const Error = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <Image src="/img/error/error.png" alt="Visual"  className="img-error"/> {/* Gambar error */}
      <GalleryTitle title="404 - Page Not Found" /> {/* Menggunakan komponen GalleryTitle */}
      <p className="text-error"> Sorry, the page you're looking for doesn't exist.</p>

      <Link to="/home">
        <button className="btn-error">Back to Home</button>
      </Link>
    </div>
  );
};

export default Error;
