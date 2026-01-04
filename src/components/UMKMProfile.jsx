import "./UMKMProfile.css";

function UMKMProfile() {
  return (
    <section className="umkm-profile">
      <div className="umkm-wrapper">
        <div className="umkm-container">
          {/* Tambahan elemen dekoratif garis kecil di atas judul */}
          <div className="title-decorator"></div>
          
          <h1 className="umkm-title">
            Kisah Kami: Inovasi Daur Ulang untuk Bumi
          </h1>

          <div className="umkm-content">
            <p className="justify-text">
              <span className="drop-cap">D</span>idirikan dengan visi untuk mengubah limbah menjadi sesuatu yang
              berharga, <strong>Tiravana</strong> lahir dari kepedulian mendalam terhadap lingkungan.
              Kami percaya bahwa setiap botol plastik bekas memiliki potensi untuk
              menjadi produk baru yang indah dan fungsional. Melalui proses yang
              inovatif dan tangan-tangan terampil, kami menciptakan produk-produk
              yang tidak hanya meminimalkan dampak lingkungan tetapi juga
              memperkaya kehidupan sehari-hari Anda.
            </p>

            <p className="justify-text">
              Setiap pilihan yang Anda buat dengan <strong>Tiravana</strong> adalah langkah nyata
              dalam mendukung ekonomi sirkular dan mengurangi jejak karbon. Kami
              berkomitmen untuk transparansi penuh dalam setiap tahap produksi,
              memastikan Anda tahu persis bagaimana produk Anda berkontribusi 
              pada planet yang lebih sehat.
            </p>
          </div>
          
          {/* Quote tambahan untuk mempercantik tampilan */}
          <div className="umkm-quote">
            "Sampah plastik hari ini, karya seni di rumah Anda esok hari."
          </div>
        </div>
      </div>
    </section>
  );
}

export default UMKMProfile;