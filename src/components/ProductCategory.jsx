import "./ProductCategory.css";
import { Link } from "react-router-dom";
import HeroProduk1 from "../assets/HeroProduk1.png";
import HeroProduk2 from "../assets/HeroProduk2.png";
import HeroProduk3 from "../assets/HeroProduk3.png";


function ProductCategory() {
  return (
    <section className="product-category">
      <h2 className="category-title">Kategori Produk Unggulan</h2>

      <p className="category-description">
        Temukan koleksi produk kami yang dibuat dengan penuh perhatian dari
        plastik daur ulang, dirancang untuk menambahkan fungsionalitas dan gaya
        berkelanjutan ke rumah Anda.
      </p>

      <div className="category-cards">
        <div className="category-card">
          <img
            src={HeroProduk1}
            alt="Tatakan"
          />
          <h3>Tatakan</h3>
          <p>
            Tatakan minimalis dan kokoh, sempurna untuk mengatur meja atau dapur
            Anda. Dibuat dari plastik daur ulang, setiap tatakan adalah langkah
            menuju masa depan yang lebih hijau.
          </p>
          <Link to="/product-katalog">
            <button className="btn-outline">Lihat Produk</button>
          </Link>
        </div>

        <div className="category-card">
          <img
            src={HeroProduk2}
            alt="Nampan"
          />
          <h3>Nampan</h3>
          <p>
            Nampan serbaguna kami dirancang untuk melayani dengan gaya dan
            fungsi. Ideal untuk menyajikan makanan, mendekorasi, atau menata
            barang-barang Anda, setiap detailnya.
          </p>
          <Link to="/product-katalog">
            <button className="btn-outline">Lihat Produk</button>
          </Link>
        </div>

        <div className="category-card">
          <img
            src={HeroProduk3}
            alt="Jam Dinding"
          />
          <h3>Jam Dinding</h3>
          <p>
            Jam dinding unik yang bukan hanya penunjuk waktu, tetapi juga
            pernyataan gaya dan komitmen terhadap keberlanjutan.
          </p>
          <Link to="/product-katalog">
            <button className="btn-outline">Lihat Produk</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductCategory;
