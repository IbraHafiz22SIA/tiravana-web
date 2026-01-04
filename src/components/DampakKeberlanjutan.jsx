import "./DampakKeberlanjutan.css";

function DampakKeberlanjutan() {
  return (
    <section className="impact">
      <h2 className="impact-title">Dampak Keberlanjutan Kami</h2>

      <p className="impact-description">
        Melalui produk-produk kami, kami berkomitmen untuk membuat perbedaan
        nyata bagi lingkungan. Setiap pembelian berkontribusi pada planet yang
        lebih bersih dan sehat.
      </p>

      <div className="impact-cards">
        <div className="impact-card">
          <span className="impact-icon">♻️</span>
          <h3>10.000+ kg</h3>
          <p>Plastik Didaur Ulang</p>
        </div>

        <div className="impact-card">
          <span className="impact-icon">🌳</span>
          <h3>500+ unit</h3>
          <p>Pohon Diselamatkan</p>
        </div>

        <div className="impact-card">
          <span className="impact-icon">🍃</span>
          <h3>20.000+ kg</h3>
          <p>Emisi CO2 Berkurang</p>
        </div>
      </div>
    </section>
  );
}

export default DampakKeberlanjutan;
