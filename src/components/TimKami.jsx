import "./TimKami.css";

function TimKami() {
  const dataTim = [
    {
      id: 1,
      nama: "Marcellino Kosasih",
      jabatan: "Pendiri & Visioner",
      // Ganti dengan path foto asli Anda
      foto: "https://randomuser.me/api/portraits/men/1.jpg", 
    },
    {
      id: 2,
      nama: "Yoga Hermanda",
      jabatan: "Kepala Produksi",
      foto: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      nama: "Arifi Ramadhan",
      jabatan: "Desainer Produk",
      foto: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  return (
    <section className="tim-section">
      <div className="tim-container">
        <h2 className="tim-title">Temui Tim Kami</h2>
        
        <div className="tim-grid">
          {dataTim.map((anggota) => (
            <div key={anggota.id} className="tim-card">
              <div className="tim-photo-wrapper">
                <img src={anggota.foto} alt={anggota.nama} className="tim-photo" />
              </div>
              <h3 className="tim-name">{anggota.nama}</h3>
              <p className="tim-role">{anggota.jabatan}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TimKami;