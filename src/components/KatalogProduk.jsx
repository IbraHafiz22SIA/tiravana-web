import "./KatalogProduk.css";
import Produk1 from "../assets/Produk1.jpeg";
import Produk2 from "../assets/Produk2.jpeg";
import Produk3 from "../assets/Produk3.jpeg";
import Produk4 from "../assets/Produk4.jpeg";
import Produk5 from "../assets/Produk5.jpeg";
import Produk6 from "../assets/Produk6.jpeg";
import Produk7 from "../assets/Produk7.jpeg";
import Produk8 from "../assets/Produk8.jpeg";
import Produk9 from "../assets/Produk9.jpeg";

function KatalogProduk() {
  const dataProduk = [
    {
      id: 1,
      nama: "Tatakan Recycle Varian Warna Orange Putih",
      harga: "Rp 15.000",
      img: Produk1, 
    },
    {
      id: 2,
      nama: "Tatakan Recycle Varian Warna Biru Putih",
      harga: "Rp 15.000",
      img: Produk2,
    },
    {
      id: 3,
      nama: "Tatakan Recycle Varian Warna Hijau Putih",
      harga: "Rp 15.000",
      img: Produk3,
    },
    {
      id: 4,
      nama: "Nampan Recycle Varian Warna Orange Putih",
      harga: "Rp 37.000",
      img: Produk4,
    },
    {
      id: 5,
      nama: "Nampan Recycle Varian Warna Hitam Putih",
      harga: "Rp 37.000",
      img: Produk5,
    },
    {
      id: 6,
      nama: "Nampan Recycle Varian Warna Biru Putih",
      harga: "Rp 37.000",
      img: Produk6,
    },
    {
      id: 7,
      nama: "Jam Dinding Recycle Orange Putih Biru",
      harga: "Rp 350.000",
      img: Produk7,
    },
    {
      id: 8,
      nama: "Jam Dinding Recycle Orange Putih Hitam",
      harga: "Rp 350.000",
      img: Produk8,
    },
    {
      id: 9,
      nama: "Jam Dinding Recycle Hitam Putih Biru",
      harga: "Rp 350.000",
      img: Produk9,
    },
  ];

  return (
    <section className="catalog-section">
      <div className="catalog-header">
        <h1 className="catalog-main-title">Katalog Produk</h1>
        <p className="catalog-subtitle">
          Jelajahi koleksi produk kami yang dibuat dengan cermat dari plastik daur ulang, dirancang untuk keberlanjutan dan gaya.
        </p>
      </div>

      <div className="catalog-grid">
        {dataProduk.map((produk) => (
          <div key={produk.id} className="catalog-card">
            <div className="catalog-img-wrapper">
              <img src={produk.img} alt={produk.nama} className="catalog-img" />
            </div>
            <div className="catalog-info">
              <h3 className="catalog-name">{produk.nama}</h3>
              <p className="catalog-price">{produk.harga}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default KatalogProduk;