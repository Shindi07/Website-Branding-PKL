import React, { useState } from "react";
import Modal from "../molecules/Galleryy/Modal";
import GalleryItem from "../molecules/Galleryy/GalleryItem";
import "../../styles/Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="Gallery">
      <div className="gallery">
        <h2 className="gallery-title">Latest Work</h2>
        <div className="gallery-content">
          {[...Array(6)].map((_, index) => (
            <GalleryItem
              key={index}
              src={`/img/gallery/Image (${index + 1}).png`}
              alt={`Gallery Item ${index + 1}`}
              title="Project title"
              description="UI, Art direction"
              onClick={() => openModal(`/img/gallery/Image (${index + 1}).png`)}
            />
          ))}
        </div>
      </div>

      {isModalOpen && <Modal imageSrc={selectedImage} onClose={closeModal} />}
    </section>
  );
};

export default Gallery;
