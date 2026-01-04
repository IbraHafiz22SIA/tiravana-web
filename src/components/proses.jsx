import "./proses.css";

function Proses() {
  const dataProses = [
    {
      id: 1,
      title: "Pengumpulan & Sortasi",
      desc: "Kami bekerja sama dengan komunitas lokal untuk mengumpulkan limbah plastik, kemudian menyortirnya berdasarkan jenis dan warna untuk memastikan kualitas bahan baku terbaik.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 11l5 5 5-5M7 7l5 5 5-5"/></svg>
      ),
    },
    {
      id: 2,
      title: "Pencacahan & Pembersihan",
      desc: "Plastik yang telah disortir dicacah menjadi serpihan kecil (flakes) dan dibersihkan secara menyeluruh untuk menghilangkan kontaminan.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8h-5a7 7 0 0 1-7 7Z"/><path d="M12 20a7 7 0 0 0 7-7"/></svg>
      ),
    },
    {
      id: 3,
      title: "Pembentukan Produk",
      desc: "Serpihan plastik dilelehkan dan dibentuk menjadi produk EcoCycle yang indah dan tahan lama menggunakan teknik cetak inovatif.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h12M6 6h12M6 12h12"/></svg>
      ),
    },
  ];

  return (
    <section className="proses-section">
      <div className="proses-container">
        <h2 className="proses-title">Proses Berkelanjutan Kami</h2>
        
        <div className="proses-grid">
          {dataProses.map((item) => (
            <div key={item.id} className="proses-card">
              <div className="proses-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="proses-card-title">{item.title}</h3>
              <p className="proses-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proses;