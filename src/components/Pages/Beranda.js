import React from "react";
import Navbar from "../organisms-temp/Navbar";
import Footer from "../organisms-temp/Footer";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import "../../styles/Beranda.css";

const Beranda = () => {
  return (
    <>
      <div className="beranda-container">
        <Navbar />
        <div className="beranda-header">
          <div className="text-section-beranda">
            <Text className="portal">Portal Satu Data Lampung Timur</Text>
            <Text className="akses">
              <h1>
                Akses Data Dalam <span className="satu">Satu Portal</span>
              </h1>
            </Text>
            <Text className="dalam">
              Dalam satu sentuhan, dunia data terbuka lebar. <br /> Mari temukan
              apa yang akan anda cari.
            </Text>
            <div className="button-header">
              <a
                name=""
                id=""
                className="btn btn-cari-data"
                href="#"
                role="button"
              >
                Cari Data
              </a>
              <a
                name=""
                id=""
                className="btn btn-lihat-dataset"
                href="#"
                role="button"
              >
                Lihat Dataset
              </a>
            </div>
          </div>
          <div className="image-section">
            <Image src="/img/beranda-img.png" className="img-header-beranda" />
          </div>
        </div>

        <div className="card-beranda">
          <div className="card1">
            <Image src="/img/sarana.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-text">Sarana & Infrastruktur</h3>
            </div>
          </div>
          <div className="card1">
            <Image
              src="/img/pembangunan.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h3 className="card-text">Ekonomi & Pembangunan</h3>
            </div>
          </div>
          <div className="card1">
            <Image src="/img/sosial.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-text">Sosial & Kesejahteraan Masyarakat</h3>
            </div>
          </div>
          <div className="card1">
            <Image
              src="/img/kebijakan.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h3 className="card-text">Kebijakan & Legislasi</h3>
            </div>
          </div>
        </div>

        <div className="card-eksemplar">
          <div className="card2">
            <div className="icon">
              <Image src="/img/ikon-card2.png" alt="Icon" />{" "}
              {/* Ganti dengan path gambar */}
            </div>
            <div className="card3">
              <h2 className="eksemplar-number">
                1157709 <span className="eksemplar">Eksemplar</span>
              </h2>

              <h5 className="eksemplar-description">
                Bahan perpustakaan tercetak di wilayah kab/kota
              </h5>
              <div className="button-group">
                <a href="#" className="btn btn-data">
                  Data Teknis
                </a>
                <a href="#" className="btn btn-teknis">
                  Sosial & Kesejahteraan Masyarakat
                </a>
              </div>
            </div>
          </div>

          {/* eksemplar 2 */}
          <div className="card2">
            <div className="icon">
              <Image src="/img/ikon-card2.png" alt="Icon" />{" "}
              {/* Ganti dengan path gambar */}
            </div>
            <div className="card-content">
              <h2 className="eksemplar-number">
                1157709 <span className="eksemplar">Eksemplar</span>
              </h2>

              <h5 className="eksemplar-description">
                koleksi perpustakaan yang ada di wilayah kab/kota
              </h5>
              <div className="button-group">
                <a href="#" className="btn btn-data">
                  Data Teknis
                </a>
                <a href="#" className="btn btn-teknis">
                  Sosial & Kesejahteraan Masyarakat
                </a>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="icon">
              <Image src="/img/ikon-card2.png" alt="Icon" />{" "}
              {/* Ganti dengan path gambar */}
            </div>
            <div className="card-content">
              <h2 className="eksemplar-number">
                178718 <span className="eksemplar">Orang</span>
              </h2>

              <h5 className="eksemplar-description">
                Anak Usia Pendidikan Dasar
              </h5>
              <div className="button-group">
                <a href="#" className="btn btn-data">
                  Data Teknis
                </a>
                <a href="#" className="btn btn-teknis">
                  Sosial & Kesejahteraan Masyarakat
                </a>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="icon">
              <Image src="/img/ikon-card2.png" alt="Icon" />{" "}
              {/* Ganti dengan path gambar */}
            </div>
            <div className="card-content">
              <h2 className="eksemplar-number">
                546044 <span className="eksemplar">Orang</span>
              </h2>

              <h5 className="eksemplar-description">Tenaga kerja</h5>
              <div className="button-group">
                <a href="#" className="btn btn-data">
                  Data Teknis
                </a>
                <a href="#" className="btn btn-teknis">
                  Sosial & Kesejahteraan Masyarakat
                </a>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="icon">
              <Image src="/img/ikon-card2.png" alt="Icon" />{" "}
              {/* Ganti dengan path gambar */}
            </div>
            <div className="card-content">
              <h2 className="eksemplar-number">
                127365 <span className="eksemplar">Orang</span>
              </h2>

              <h5 className="eksemplar-description">
                Peserta pada satuan pendidikan Dasar
              </h5>
              <div className="button-group">
                <a href="#" className="btn btn-data">
                  Data Teknis
                </a>
                <a href="#" className="btn btn-teknis">
                  Sosial & Kesejahteraan Masyarakat
                </a>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="icon">
              <Image src="/img/ikon-card2.png" alt="Icon" />{" "}
              {/* Ganti dengan path gambar */}
            </div>
            <div className="card-content">
              <h2 className="eksemplar-number">
                99149 <span className="eksemplar">KM</span>
              </h2>

              <h5 className="eksemplar-description">
                Panjang Jaringan Irigasi Permukaan
              </h5>
              <div className="button-group">
                <a href="#" className="btn btn-data">
                  Data Teknis
                </a>
                <a href="#" className="btn btn-teknis">
                  Sarana & Infrastruktur
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="solution-header">
          <div className="text-solution">
            <Text className="satu-data">Satu Data</Text>
            <Text className="akses">
              <h1 className="mengapa">Mengapa Menggunakan Satu Data Lamtim?</h1>
            </Text>
            <Text className="deskripsi">
              Satu Data adalah sebuah inisiatif pemerintah Indonesia untuk
              mendorong pengambilan kebijakan berdasarkan data. Untuk mewujudkan
              hal tersebut, maka diperlukan pemenuhan atas data pemerintah yang
              akurat, terbuka, dan interoperable.
            </Text>
            <div className="button-header">
              <a
                name=""
                id=""
                className="btn btn-lihat-dataset"
                href="#"
                role="button"
              >
                Explore
              </a>
            </div>
          </div>
          <div className="image-section">
            <Image src="/img/solution.png" className="img-solution" />
          </div>
        </div>

        {/* Content */}
        {/* <div class="container-content">
          <div class="card3">
            <div class="icon">📊</div>
            <h3>Menemukan Data Dengan Mudah</h3>
            <p>
              Cari data dari Pemerintah Lampung timur dalam beberapa klik saja.
            </p>
          </div>
          <div class="card3">
            <div class="icon">⚡</div>
            <h3>Mendapatkan Data Dengan Cepat</h3>
            <p>Nikmati proses akses data tanpa proses birokrasi panjang.</p>
          </div>
          <div class="card3">
            <div class="icon">✅</div>
            <h3>Data Akurat dan Muatkhir</h3>
            <p>
              Dapatkan data lengkap dan terkini resmi dari Organisasi Perangkat
              Daerah terkait.
            </p>
          </div>
        </div> */}

        {/* <Footer /> */}
        <Footer/>
      </div>
    </>
  );
};

export default Beranda;
