import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faCalendar } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Dataset.css"; // Mengimpor CSS untuk styling halaman dataset
import Navbar from "../organisms-temp/Navbar"; // Mengimpor komponen Navbar
import Footer from "../organisms-temp/Footer"; // Mengimpor komponen Footer

const Dataset = () => {
  const [datasets, setDatasets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [opdSearchTerm, setOpdSearchTerm] = useState("");
  const [opds, setDataOPD] = useState([]);
  const [selectedOPD, setSelectedOPD] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [datasetsPerPage] = useState(6);
  const [sortOrder, setSortOrder] = useState("asc");

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
    fetchOPD();
  }, []);

  const filteredDatasets = datasets.filter((dataset) => {
    const matchesSearchTerm = dataset.uraian_dssd
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesSelectedOPD = selectedOPD
      ? dataset.nama_opd === selectedOPD
      : true;
    return matchesSearchTerm && matchesSelectedOPD;
  });

  const handleOPDClick = (nama_opd) => {
    setSelectedOPD(nama_opd);
  };

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };

  const indexOfLastDataset = currentPage * datasetsPerPage;
  const indexOfFirstDataset = indexOfLastDataset - datasetsPerPage;
  const currentDatasets = filteredDatasets.slice(
    indexOfFirstDataset,
    indexOfLastDataset
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredDatasets.length / datasetsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const sortDatasets = (order) => {
    const sortedDatasets = [...filteredDatasets].sort((a, b) => {
      const nameA = a.uraian_dssd.toLowerCase();
      const nameB = b.uraian_dssd.toLowerCase();
      const dateA = new Date(a.modified);
      const dateB = new Date(b.modified);

      switch (order) {
        case "asc":
          return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
        case "desc":
          return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
        case "latest":
          return dateB - dateA;
        case "oldest":
          return dateA - dateB;
        default:
          return 0;
      }
    });

    setDatasets(sortedDatasets);
  };

  const handleSortChange = (e) => {
    const selectedOrder = e.target.value;
    setSortOrder(selectedOrder);
    sortDatasets(selectedOrder);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="dataset-judul">
        <h1 className="title-dataset">Dataset</h1>
        <p className="deskripsi-dataset">
          Temukan kumpulan data-data mentah berupa tabel yang bisa diolah lebih
          lanjut di sini. Open Data menyediakan akses ke beragam koleksi dataset
          dari seluruh Organisasi Perangkat Daerah di Lampung Timur.
        </p>
      </div>
      <div className="dataset-container">
        <div className="sidebar-opd">
          <h5>Produsen Dataset</h5>
          <input
            type="text"
            placeholder="Cari Produsen..."
            value={opdSearchTerm}
            onChange={(e) => setOpdSearchTerm(e.target.value)}
            className="search-input-opd"
          />
          <ul className="opd-list">
            {opds
              .filter((opd) =>
                opd.nama_opd.toLowerCase().includes(opdSearchTerm.toLowerCase())
              )
              .map((opd) => (
                <li key={opd.id_opd}>
                  <button onClick={() => handleOPDClick(opd.nama_opd)}>
                    {opd.nama_opd}
                  </button>
                </li>
              ))}
          </ul>
        </div>

        <div className="dataset-form">
          <div className="dataset-cards-wrapper">
            <h5>List Dataset</h5>
            <input
              type="text"
              placeholder="Cari dataset..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <div className="data-sorter">
              <p>{filteredDatasets.length} data ditemukan</p>
              <select
                value={sortOrder}
                onChange={handleSortChange}
                className="sort-dropdown"
              >
                <option value="asc">Urutkan A-Z</option>
                <option value="desc">Urutkan Z-A</option>
                <option value="latest">Urutkan Terbaru</option>
                <option value="oldest">Urutkan Terlama</option>
              </select>
            </div>

            {filteredDatasets.length > 0 ? (
              currentDatasets.map((dataset) => (
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
                        {truncateDescription(dataset.description, 100)}
                      </p>
                      <Link to={`/dataset/${dataset.id}`}>Selengkapnya</Link>
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
                            Terakhir diubah:{" "}
                            {new Date(dataset.modified).toLocaleDateString(
                              "id-ID"
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="data-error">
                <p className="data-error">Maaf, dataset tidak ditemukan</p>
                <img
                  src="/img/data-error.gif"
                  alt="No Data Found"
                  className="dataerror-img"
                />
              </div>
            )}

            {/* Tombol pagination untuk next dan previous */}
            <div className="pagination">
  <button
    onClick={prevPage}
    disabled={currentPage === 1}
    className="pagination-button"
  >
    Previous
  </button>
  <span className="pagination-text">
    Page {currentPage} of {Math.ceil(filteredDatasets.length / datasetsPerPage)}
  </span>
  <button
    onClick={nextPage}
    disabled={
      currentPage ===
      Math.ceil(filteredDatasets.length / datasetsPerPage)
    }
    className="pagination-button"
  >
    Next
  </button>
</div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dataset;
