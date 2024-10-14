import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../../styles/Sektoral.css";
import Navbar from "../organisms-temp/Navbar";
import Footer from "../organisms-temp/Footer";

const Sektoral = () => {
  const [opds, setDataOPD] = useState([]);
  const [urusans, setDataUrusan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [DariTahun, setDariTahun] = useState("");
  const [SampaiTahun, setSampaiTahun] = useState("");
  const [selectedOPD, setSelectedOPD] = useState("");
  const [selectedUrusan, setSelectedUrusan] = useState("");
  const [dataHasil, setDataHasil] = useState([]);

  // State untuk pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20); // jumlah item per halaman

  // Ambil data OPD saat komponen di-mount
  useEffect(() => {
    const fetchDataOPD = async () => {
      try {
        const response = await axios.get("http://116.206.212.234:4000/list-opd");
        setDataOPD(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataOPD();
  }, []);

  // Mengambil data urusan berdasarkan OPD yang dipilih
  const handleOPDChange = async (e) => {
    const opdId = e.target.value;
    setSelectedOPD(opdId);
    setSelectedUrusan("");
    setLoading(true);

    if (opdId) {
      try {
        const response = await axios.get(
          `http://116.206.212.234:4000/data-sektoral/list-urusan-by-id-opd?id_user_opd=${opdId}`
        );
        setDataUrusan(response.data);
        setError(null);
      } catch (error) {
        setError("Gagal mengambil data urusan.");
      } finally {
        setLoading(false);
      }
    } else {
      setDataUrusan([]);
      setLoading(false);
    }
  };

  // Fungsi untuk menangani pencarian data
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentPage(1); // Reset ke halaman pertama saat mencari

    try {
      const response = await axios.get("http://116.206.212.234:4000/data-sektoral", {
        params: {
          id_user_opd: selectedOPD,
          kode_urusan: selectedUrusan,
          dari_tahun: DariTahun,
          sampai_tahun: SampaiTahun,
        },
      });

      // Memastikan data yang diterima tidak null atau undefined
      if (response.data && Array.isArray(response.data)) {
        setDataHasil(response.data);
      } else {
        setDataHasil([]); // Jika data kosong
      }
      setError(null);
    } catch (error) {
      setError("Terjadi kesalahan saat mengambil data.");
      Swal.fire("Error", "Terjadi kesalahan saat mengambil data", "error");
    } finally {
      setLoading(false);
    }
  };

  // Hitung total halaman
  const totalPages = Math.ceil(dataHasil.length / itemsPerPage);

  // Ambil data yang akan ditampilkan di halaman saat ini
  const currentData = dataHasil.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="sektoral-container">
        <Navbar />
        <div className="sektoral-box">
          <h2 className="sektoral-title">Cari Data Sektoral</h2>
          <form className="sektoral-form" onSubmit={handleSearch}>
            <select
              className="sektoral-input"
              value={selectedOPD}
              onChange={handleOPDChange}
            >
              <option value="">Pilih OPD</option>
              {opds.map((OPD) => (
                <option key={OPD.id_opd} value={OPD.id_opd}>
                  {OPD.nama_opd}
                </option>
              ))}
            </select>

            <select
              className="sektoral-input"
              value={selectedUrusan}
              onChange={(e) => setSelectedUrusan(e.target.value)}
              disabled={!selectedOPD}
            >
              <option value="">Pilih Urusan</option>
              {urusans.map((Urusan) => (
                <option key={Urusan.kode_urusan} value={Urusan.kode_urusan}>
                  {Urusan.nama_urusan}
                </option>
              ))}
            </select>

            <input
              className="sektoral-input"
              type="number"
              placeholder="Dari Tahun"
              value={DariTahun}
              onChange={(e) => setDariTahun(e.target.value)}
              required
            />
            <input
              className="sektoral-input"
              type="number"
              placeholder="Sampai Tahun"
              value={SampaiTahun}
              onChange={(e) => setSampaiTahun(e.target.value)}
              required
            />
            <button className="sektoral-button" type="submit">
              <i className="fas fa-search" style={{ marginRight: "8px" }}></i>
              Cari
            </button>
          </form>

          {error && <p className="error-message">{error}</p>}

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="result-table table-striped">
              <h3>Hasil Pencarian</h3>
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Uraian</th>
                    <th>Satuan</th>
                    <th>Jenis</th>
                    <th>Kategori</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.length > 0 ? (
                    currentData.map((item, index) => (
                      <tr key={index}>
                        <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                        <td>{item.uraian_dssd}</td>
                        <td>{item.satuan}</td>
                        <td>{item.jenis_string}</td>
                        <td>{item.kategori_string}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6">Tidak ada data yang ditemukan</td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="pagination">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={currentPage === i + 1 ? "active" : ""}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Sektoral;
