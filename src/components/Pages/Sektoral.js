import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../../styles/Sektoral.css";
import Navbar from "../organisms-temp/Navbar";

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

  // Mengambil urusan saat OPD dipilih
  const handleOPDChange = async (e) => {
    const opdId = e.target.value;
    setSelectedOPD(opdId);
    setSelectedUrusan(""); // Reset urusan setiap kali OPD berubah
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
      setDataUrusan([]); // Kosongkan urusan jika tidak ada OPD yang dipilih
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get("http://116.206.212.234:4000/data-sektoral", {
        params: {
          id_user_opd: selectedOPD,
          kode_urusan: selectedUrusan,
          dari_tahun: DariTahun,
          sampai_tahun: SampaiTahun,
        },
      });
      setDataHasil(response.data);
      setError(null);
    } catch (error) {
      setError("Terjadi kesalahan saat mengambil data.");
      Swal.fire("Error", "Terjadi kesalahan saat mengambil data", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sektoral-container">
      <Navbar/>
      <div className="sektoral-box">
        <h2 className="sektoral-title">Cari Data Sektoral</h2>
        <form className="sektoral-form" onSubmit={handleSearch}>
          <select
            className="sektoral-input"
            value={selectedOPD}
            onChange={handleOPDChange} // Panggil handler saat OPD dipilih
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
            disabled={!selectedOPD} // Disable dropdown urusan jika OPD belum dipilih
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Sektoral;
