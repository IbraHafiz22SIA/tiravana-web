import "./Hero.css";
import { Link } from "react-router-dom";
// 1. Import gambar dari folder assets
// Perhatikan: Sesuaikan jumlah titik (../) dengan posisi folder Anda
import selectionImg from "../assets/Selection.png"; 

function Hero() {
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url(${selectionImg})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-subtitle">
            Misi Kami: Kelestarian Lingkungan
          </p>

          <h1 className="hero-title">
            Produk Daur Ulang, <br />
            Desain Berkelanjutan
          </h1>

          <p className="hero-description">
            Jelajahi koleksi kami yang dibuat dengan cermat dari plastik daur
            ulang, memberikan dampak positif pada planet ini tanpa
            mengorbankan gaya.
          </p>

          <div className="hero-buttons">
            <Link to="/product-katalog">
              <button className="btn-primary">
                Lihat Product Catalog
              </button>
            </Link>

            <Link to="/umkm-profile">
              <button className="btn-secondary">
                Pelajari Lebih Lanjut
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;