import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Dataset.css";
import Navbar from "../organisms-temp/Navbar";
import Footer from "../organisms-temp/Footer";

const Dataset = () => {
  const [datasets, setDatasets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // State untuk menyimpan input pencarian

  // Fungsi untuk fetch data dari API
  const fetchDatasets = async () => {
    try {
      const response = await fetch("http://116.206.212.234:4000/dataset");
      const data = await response.json();
      setDatasets(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching the dataset:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDatasets();
  }, []);

  // Filter datasets berdasarkan input pencarian
  const filteredDatasets = datasets.filter(
    (dataset) =>
      dataset.uraian_dssd.toLowerCase().includes(searchTerm.toLowerCase()) // Mencocokkan dengan uraiandssd
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />

      <div className="dataset-container">
        <div className="dataset-form">
          {/* Input pencarian */}
          <h1 className="title-dataset">Dataset</h1>
          <p className="deskripsi-dataset">
            Temukan kumpulan data-data mentah berupa tabel yang bisa diolah
            lebih lanjut di sini. Open Data menyediakan akses ke beragam koleksi
            dataset dari seluruh Organisasi Perangkat Daerah di Lampung Timur.
          </p>

          {/* Pembungkus untuk card */}
          <div className="dataset-cards-wrapper">
            <h4>List Dataset</h4>
            <input
              type="text"
              placeholder="Cari dataset..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm saat input berubah
              className="search-input" // Tambahkan kelas untuk styling
            />
            <p>{filteredDatasets.length} data ditemukan</p>{" "}
            {/* Menampilkan jumlah data yang ditemukan */}
            {filteredDatasets.map((dataset) => (
              <Link
                to={`/dataset/${dataset.id}`}
                key={dataset.id}
                className="dataset-card-link"
              >
                <div className="dataset-card">
                  <div className="dataset-image">
                    <img
                      src="/img/file image.png"
                      alt="Visual"
                      className="dataset-img"
                    />
                  </div>
                  <div className="dataset-content">
                    <h2 className="dataset-title">{dataset.uraian_dssd}</h2>
                    <p className="dataset-description">{dataset.description}</p>
                    <div className="dataset-info">
                      <div className="organisasi">
                        <FontAwesomeIcon
                          icon={faBuilding}
                          className="icon-gedung"
                        />
                        <p>Organisasi: {dataset.nama_opd}</p>
                      </div>
                      <div className="last-modified">
                        <FontAwesomeIcon
                          icon={faCalendar}
                          className="icon-calendar"
                        />
                        <p>
                          Terakhir dimodifikasi:{" "}
                          {new Date(dataset.modified).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Dataset;
