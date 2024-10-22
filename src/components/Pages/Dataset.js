import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faCalendar } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Dataset.css";
import Navbar from "../organisms-temp/Navbar";
import Footer from "../organisms-temp/Footer";
import Select from "react-select";

const Dataset = () => {
  const [datasets, setDatasets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // State untuk menyimpan input pencarian
  const [opdSearchTerm, setOpdSearchTerm] = useState(""); // State untuk pencarian OPD
  const [opds, setDataOPD] = useState([]); // State untuk OPD
  const [selectedOPD, setSelectedOPD] = useState(""); // State untuk OPD terpilih

  // Fungsi untuk fetch data dari API untuk datasets
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

  // Fungsi untuk fetch data dari API untuk OPD
  const fetchOPD = async () => {
    try {
      const response = await fetch("http://116.206.212.234:4000/list-opd");
      const data = await response.json();
      setDataOPD(data);
    } catch (error) {
      console.error("Error fetching OPD:", error);
    }
  };

  useEffect(() => {
    fetchDatasets();
    fetchOPD(); // Ambil data OPD saat komponen dimuat
  }, []);

  // Filter datasets berdasarkan input pencarian dan OPD yang dipilih
  const filteredDatasets = datasets.filter((dataset) => {
    const matchesSearchTerm = dataset.uraian_dssd
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesSelectedOPD = selectedOPD
      ? dataset.nama_opd === selectedOPD
      : true; // Jika tidak ada OPD yang dipilih, biarkan semua dataset

    return matchesSearchTerm && matchesSelectedOPD; // Kembalikan dataset yang cocok
  });

  // Filter OPD berdasarkan input pencarian
  const filteredOPDs = opds.filter((opd) =>
    opd.nama_opd.toLowerCase().includes(opdSearchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }
// Membatasi jumlah karakter untuk deskripsi dataset
const truncateDescription = (description, maxLength) => {
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + '...'; // Memotong deskripsi
  }
  return description;
};

  return (
    <>
      <Navbar />
    <div className="dataset-judul">
    <h1 className="title-dataset">Dataset</h1>
        <p className="deskripsi-dataset">
          Temukan kumpulan data-data mentah berupa tabel yang bisa diolah
          lebih lanjut di sini. Open Data menyediakan akses ke beragam koleksi
          dataset dari seluruh Organisasi Perangkat Daerah di Lampung Timur.
        </p>
      </div>
    <div className="dataset-container">
      {/* Sidebar untuk memilih OPD */}
      <div className="sidebar-opd">
        <h5>Produsen Dataset</h5>
        
        {/* Input pencarian OPD */}
        <input
          type="text"
          placeholder="Cari Produsen..."
          value={opdSearchTerm}
          onChange={(e) => setOpdSearchTerm(e.target.value)} // Update opdSearchTerm saat input berubah
          className="search-input-opd" // Tambahkan kelas untuk styling
        />

        <div className="opd-select-wrapper">
          {/* Select untuk memilih OPD */}
        
        </div>
        <ul className="opd-list">
          {filteredOPDs.map((opd) => (
            <li key={opd.id_opd}>
              <Link to={`/opd/${opd.id_opd}`}>{opd.nama_opd}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="dataset-form">
        
    
        {/* Pembungkus untuk card */}
        <div className="dataset-cards-wrapper">
          <h5>List Dataset</h5>
          {/* Input pencarian dataset */}
          <input
            type="text"
            placeholder="Cari dataset..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm saat input berubah
            className="search-input" // Tambahkan kelas untuk styling
          />
      
          <p>{filteredDatasets.length} data ditemukan</p> {/* Menampilkan jumlah data yang ditemukan */}
          {filteredDatasets.map((dataset) => (
            <Link
              to={`/dataset/${dataset.id}`}
              key={dataset.id}
              className="dataset-card-link"
            >
              <div className="dataset-card">
                <div className="dataset-image">
                  <img
                    src="/img/image.png"
                    alt="Visual"
                    className="dataset-img"
                  />
                </div>
                <div className="dataset-content">
  <h2 className="dataset-title">{dataset.uraian_dssd}</h2>
  <p className="dataset-description">
    {truncateDescription(dataset.description, 100)} {/* Batasi deskripsi hingga 100 karakter */}
  </p>
  <Link to={`/dataset/${dataset.id}`}>Selengkapnya</Link> {/* Tautan ke halaman detail */}
  <div className="dataset-info">
    <div className="organisasi">
      <FontAwesomeIcon icon={faBuilding} className="icon-gedung" />
      <p>Organisasi: {dataset.nama_opd}</p>
    </div>
    <div className="last-modified">
      <FontAwesomeIcon icon={faCalendar} className="icon-calendar" />
      <p>
        Terakhir dimodifikasi: {new Date(dataset.modified).toLocaleDateString()}
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
