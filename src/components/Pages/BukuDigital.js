import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/BukuDigital.css";
import Navbar from "../organisms-temp/Navbar";
import Footer from "../organisms-temp/Footer";

const BukuDigital = () => {
  const [bukuDigital, setBukuDigital] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://116.206.212.234:4000/buku-digital"
        );
        if (response.data) {
          setBukuDigital(response.data);
        } else {
          setError("Data tidak ditemukan.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Gagal mengambil data buku digital. Coba lagi.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const openPDF = (filePath) => {
    const fullUrl = `http://116.206.212.234:4000${filePath.replace(
      "handler/http",
      ""
    )}`;
    window.open(fullUrl, "_blank");
  };

  return (
    <>
    <div className="buku-digital-container">
      <Navbar />
      <div className="buku-digital-box">
        <h2 className="buku-digital-title">Daftar Buku Digital</h2>
        {error && <p className="error-message">{error}</p>}

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="table table-light table-hover">
            <table>
              <thead>
                <tr>
                  <th>Judul Buku</th>
                  <th>Tahun</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                {bukuDigital.length > 0 ? (
                  bukuDigital.map((buku) => (
                    <tr key={buku.id_buku_digital}>
                      <td>{buku.buku}</td>
                      <td>{buku.tahun}</td>
                      <td>
                        <button
                          className="detail-button"
                          onClick={() => openPDF(buku.file)}
                        >
                          Detail
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">Tidak ada data yang ditemukan</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default BukuDigital;
