import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Sektoral.css"; // Sesuaikan dengan path CSS yang benar
import Navbar from "../organisms-temp/Navbar";
import Footer from "../organisms-temp/Footer";
import Select from "react-select";

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
  const [hasSearched, setHasSearched] = useState(false);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const [totalData, setTotalData] = useState(0); // Total data dari header API

  // Fetch data OPD saat komponen di-mount
  useEffect(() => {
    fetchDataOPD();
  }, []);

  const fetchDataOPD = async () => {
    setLoading(true); // Mulai loading sebelum fetching
    try {
      const response = await axios.get("http://116.206.212.234:4000/list-opd");
      setDataOPD(response.data); // Tidak perlu memformat, simpan langsung data OPD
    } catch (error) {
      setError("Gagal mengambil data OPD.");
      console.log("Error fetching OPD:", error);
    } finally {
      setLoading(false); // Set loading false setelah fetching selesai
    }
  };

  // Handle perubahan OPD
  const handleOPDChange = async (e) => {
    const selectedValue = e.target.value;
    setSelectedOPD(selectedValue);
    setSelectedUrusan(""); // Reset urusan saat OPD berubah
    setLoading(true); // Set loading true

    if (selectedValue) {
      try {
        const response = await axios.get(
          `http://116.206.212.234:4000/data-sektoral/list-urusan-by-id-opd?id_user_opd=${selectedValue}`
        );
        setDataUrusan(response.data);
        setError(null); // Reset error
      } catch (error) {
        setError("Gagal mengambil data urusan.");
        console.log("Error fetching Urusan:", error);
      } finally {
        setLoading(false); // Set loading false setelah fetching selesai
      }
    } else {
      setDataUrusan([]); // Clear urusan jika tidak ada OPD yang dipilih
      setLoading(false);
    }
  };

  // Handle pencarian data
  const handleSearch = async (e) => {
    if (e) e.preventDefault(); // Mencegah refresh halaman

    if (parseInt(SampaiTahun) < parseInt(DariTahun)) {
      setError("Tahun akhir tidak boleh lebih kecil dari tahun awal.");
      return;
    }

    setLoading(true);
    setHasSearched(true); // Set telah melakukan pencarian

    try {
      const response = await axios.get(
        "http://116.206.212.234:4000/data-sektoral",
        {
          params: {
            id_user_opd: selectedOPD ? selectedOPD : "",
            kode_urusan: selectedUrusan,
            dari_tahun: DariTahun,
            sampai_tahun: SampaiTahun,
            page: currentPage,
            per_page: itemsPerPage,
          },
        }
      );

      // Set hasil pencarian
      setDataHasil(response.data);
      const totalItems = response.headers["x-pagination-total-count"];
      setTotalData(totalItems ? parseInt(totalItems, 10) : 0);
      setError(null); // Reset error

      // Jika tidak ada data di halaman ini tetapi masih ada halaman sebelumnya
      if (response.data.length === 0 && currentPage > 1) {
        setCurrentPage(currentPage - 1); // Kembali ke halaman sebelumnya
      }
    } catch (error) {
      setError("Terjadi kesalahan saat mengambil data.");
      console.log("API Error:", error);
    } finally {
      setLoading(false); // Set loading false setelah fetching selesai
    }
  };

  // Hitung total halaman
  const totalPages = Math.ceil(totalData / itemsPerPage);

  // Handle perubahan halaman
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      handleSearch(); // Panggil pencarian ulang saat halaman berubah
    }
  };

  return (
    <>
      <div className="sektoral-container">
        <Navbar />
        <div className="container-fluid">
          <h2 className="sektoral-title">Cari Data Sektoral</h2>
          <form className="sektoral-form" onSubmit={handleSearch}>
            <Select
              className="sektoral-select"
              value={
                selectedOPD
                  ? {
                      value: selectedOPD,
                      label: opds.find((opd) => opd.id_opd === selectedOPD)
                        ?.nama_opd,
                    }
                  : null
              }
              onChange={(selectedOption) => {
                setSelectedOPD(selectedOption ? selectedOption.value : "");
                setSelectedUrusan(""); // Reset urusan saat OPD berubah
                handleOPDChange({ target: { value: selectedOption.value } }); // Panggil handler perubahan OPD
              }}
              options={opds.map((OPD) => ({
                value: OPD.id_opd,
                label: OPD.nama_opd,
              }))}
            />

            <Select
              className="sektoral-select"
              value={
                selectedUrusan
                  ? {
                      value: selectedUrusan,
                      label: urusans.find(
                        (urusan) => urusan.kode_urusan === selectedUrusan
                      )?.nama_urusan,
                    }
                  : null
              }
              onChange={(selectedOption) =>
                setSelectedUrusan(selectedOption ? selectedOption.value : "")
              }
              options={urusans.map((Urusan) => ({
                value: Urusan.kode_urusan,
                label: Urusan.nama_urusan,
              }))}
              isDisabled={!selectedOPD}
            />

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
              Cari
            </button>
          </form>

          {error && <p className="error-message">{error}</p>}

          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <div className="result-table">
                <h3>Hasil Pencarian</h3>
                <div className="title-page">
                  <h6 className="subtitle-page">
                    Page {currentPage} of {totalPages}
                  </h6>
                  <h6 className="subtitle-page">Total Records: {totalData}</h6>
                </div>
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
                    {dataHasil.length > 0 ? (
                      dataHasil.map((item, index) => (
                        <tr key={index}>
                          <td>
                            {(currentPage - 1) * itemsPerPage + index + 1}
                          </td>
                          <td>{item.uraian_dssd}</td>
                          <td>{item.satuan}</td>
                          <td>{item.jenis_string}</td>
                          <td>{item.kategori_string}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5">Tidak ada data yang ditemukan</td>
                      </tr>
                    )}
                  </tbody>
                </table>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="pagination">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="btn-disable"
                    >
                      Previous
                    </button>

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="btn-disable"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sektoral;
