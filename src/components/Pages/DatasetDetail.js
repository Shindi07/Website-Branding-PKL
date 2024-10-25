import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/DatasetDetail.css"; // Mengimpor CSS untuk styling komponen
import Navbar from "../organisms-temp/Navbar"; // Mengimpor komponen Navbar
import Footer from "../organisms-temp/Footer"; // Mengimpor komponen Footer
import { Bar } from "react-chartjs-2"; // Mengimpor Bar chart dari react-chartjs-2
import { PolarArea } from "react-chartjs-2"; // Mengimpor Polar Area chart

// Mengimpor modul dari chart.js untuk konfigurasi chart
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PolarAreaController, // Untuk polar area chart
  RadialLinearScale, // Untuk skala radial
  ArcElement, // Untuk elemen arc di polar area chart
} from "chart.js";

// Mendaftarkan komponen ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PolarAreaController, // Daftarkan polar area controller
  RadialLinearScale, // Daftarkan radial linear scale
  ArcElement // Daftarkan arc element untuk polar chart
);

const DatasetDetail = () => {
  const { id } = useParams(); // Mengambil parameter 'id' dari URL
  const [dataset, setDataset] = useState(null); // State untuk menyimpan data dataset
  const [loading, setLoading] = useState(true); // State untuk loading

  // Fungsi untuk mengambil detail dataset dari API
  const fetchDatasetDetail = async () => {
    try {
      const response = await fetch(
        `http://116.206.212.234:4000/dataset/detail/${id}`
      );
      const data = await response.json();
      setDataset(data); // Menyimpan data yang diterima ke state 'dataset'
    } catch (error) {
      console.error("Error fetching the dataset detail:", error); // Menangani error
    } finally {
      setLoading(false); // Set loading ke false setelah data diambil
    }
  };

  // useEffect untuk memanggil fetchDatasetDetail saat pertama kali komponen di-render
  useEffect(() => {
    fetchDatasetDetail();
  }, [id]);

  // Jika masih loading, tampilkan pesan 'Loading...'
  if (loading) {
    return <div>Loading...</div>;
  }

  // Sorting data input berdasarkan tahun secara ascending
  const sortedInput = dataset.input
    ? [...dataset.input].sort((a, b) => a.tahun - b.tahun)
    : [];

  // Mapping tahun dan jumlah data untuk digunakan di chart
  const tahunLabels = sortedInput.map((item) => item.tahun);
  const jumlahData = sortedInput.map((item) => item.jumlah);

  // Data untuk Bar Chart
  const barChartData = {
    labels: tahunLabels, // Labels chart (tahun)
    datasets: [
      {
        label: "Jumlah Dataset", // Label untuk chart
        data: jumlahData, // Data jumlah dataset per tahun
        backgroundColor: "#a569bd", // Warna bar chart
      },
    ],
  };

  // Opsi untuk Bar Chart
  const barChartOptions = {
    responsive: true, // Membuat chart responsif
    maintainAspectRatio: false, // Mengizinkan pengaturan ukuran manual
    plugins: {
      legend: {
        position: "top", // Posisi legend di atas
      },
      title: {
        display: true,
        text: "Jumlah Data", // Judul chart
      },
    },
  };

  // Data untuk Polar Area Chart
  const polarAreaData = {
    labels: tahunLabels, // Labels chart sama dengan Bar Chart
    datasets: [
      {
        label: "Jumlah Dataset",
        data: jumlahData, // Data sama dengan Bar Chart
        backgroundColor: ["rgb(75, 192, 192)", "rgb(255, 99, 132)"], // Warna area polar chart
      },
    ],
  };

  // Opsi untuk Polar Area Chart
  const polarAreaOptions = {
    maintainAspectRatio: false, // Mengizinkan pengaturan ukuran manual
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Posisi legend di atas
      },
      title: {
        display: true,
        text: "Jumlah Data", // Judul chart
      },
    },
  };

  const handleDownload = () => {
    // Data CSV dengan header "Tahun" dan "Jumlah"
    const csvData = [
      ["Tahun", "Jumlah"],
      ...(dataset.input
        ? dataset.input.map((item) => [item.tahun, item.jumlah])
        : []),
    ];

    // Konversi data menjadi format CSV
    const csvContent =
      "data:text/csv;charset=utf-8," +
      csvData.map((e) => e.join(",")).join("\n");

    // Buat URI dan link untuk mengunduh
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "data_sektoral.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="dataset-detail-container">
        <Navbar /> {/* Komponen Navbar */}
        <div className="datasetDetail-judul">
          <h1 className="title-dataset">Dataset Detail</h1>
          <p className="deskripsi-dataset">
            Temukan kumpulan data-data mentah berupa tabel yang bisa diolah
            lebih lanjut di sini. Open Data menyediakan akses ke beragam koleksi
            dataset dari seluruh Organisasi Perangkat Daerah di Lampung Timur.
          </p>
        </div>
        {/* Tabel untuk menampilkan detail dataset */}
        <table className="dataset-detail-table">
          <tbody>
            <tr>
              <th>Nama OPD</th>
              <td>{dataset.nama_opd}</td>
            </tr>
            <tr>
              <th>Judul Dataset</th>
              <td>{dataset.uraian_dssd}</td>
            </tr>
            <tr>
              <th>Deskripsi</th>
              <td>{dataset.description}</td>
            </tr>
            <tr>
              <th>Jenis Data</th>
              <td>{dataset.jenis_string}</td>
            </tr>
            <tr>
              <th>Kategori Data</th>
              <td>{dataset.kategori_string}</td>
            </tr>
            <tr>
              <th>Kode DSSD</th>
              <td>{dataset.kode_urusan}</td>
            </tr>
            <tr>
              <th>Satuan</th>
              <td>{dataset.satuan}</td>
            </tr>
          </tbody>
        </table>
        <div className="dataset-Interoperabilitas mt-8">
          <div className="dataset-Interoperabilitas-judul">
            <h5>Jumlah Data Sektoral & API Interoperabilitas</h5>
            <a className="btn btn-primary" href="#" role="button" onClick={handleDownload}>
              Download Data
            </a>
          </div>

          {/* Tabel untuk menampilkan data jumlah sektoral per tahun */}
          <div className="dataset-section">
            <table className="table dataset-Interoperabilitas">
              <thead>
                <tr>
                  <th scope="col">Tahun</th>
                  <th scope="col">Jumlah</th>
                </tr>
              </thead>
              <tbody>
                {dataset.input && dataset.input.length > 0 ? (
                  dataset.input.map((item, index) => (
                    <tr key={index}>
                      <td>{item.tahun}</td>
                      <td>{item.jumlah}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="text-center">
                      Data Tidak Ada!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Tabel untuk menampilkan API Interoperabilitas */}
            <table className="table dataset-Interoperabilitas">
              <thead>
                <tr>
                  <th scope="col">Method</th>
                  <th scope="col">API</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>GET</td>
                  <td>
                    <a
                      href={`http://116.206.212.234:3002/dataset/detail/${id}`}
                    >
                      <button className="btn btn-primary">Open API</button>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bar Chart untuk visualisasi data */}
          <div className="chart-container">
            <Bar
              data={barChartData}
              options={{
                ...barChartOptions,
                maintainAspectRatio: false, // Mengizinkan pengaturan ukuran manual
              }}
              height={400} // Mengatur tinggi chart
              width={500} // Mengatur lebar chart
            />
          </div>

          {/* Polar Area Chart untuk visualisasi alternatif */}
          <div className="polar-chart-container">
            <PolarArea
              data={polarAreaData}
              options={polarAreaOptions}
              height={600} // Mengatur tinggi chart
              width={600} // Mengatur lebar chart
            />
          </div>
        </div>
      </div>
      <Footer /> {/* Komponen Footer */}
    </>
  );
};

export default DatasetDetail;
