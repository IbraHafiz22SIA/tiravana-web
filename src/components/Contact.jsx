import "./Contact.css";
import { HiOutlineLocationMarker, HiOutlineClock, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <h1 className="contact-main-title">Hubungi Kami</h1>
        <p className="contact-subtitle">
          Kami siap membantu! Jika Anda memiliki pertanyaan, masukan, atau ingin mengetahui 
          lebih lanjut tentang produk dan misi keberlanjutan kami, jangan ragu untuk menghubungi tim Tiravana.
        </p>
      </div>

      <div className="contact-container">
        <h2 className="contact-card-title">Detail Kontak & Lokasi</h2>
        
        <div className="contact-info-list">
          {/* Alamat */}
          <div className="contact-item">
            <div className="contact-icon-box">
              <HiOutlineLocationMarker className="contact-icon" />
            </div>
            <div className="contact-text">
              <p className="contact-label">Alamat Kami</p>
              <p className="contact-value">Jalan Lingkungan Hijau No. 23, Kecamatan Lestari, Kota Bumi Hijau, 12345</p>
            </div>
          </div>

          {/* Jam Operasional */}
          <div className="contact-item">
            <div className="contact-icon-box">
              <HiOutlineClock className="contact-icon" />
            </div>
            <div className="contact-text">
              <p className="contact-label">Jam Operasional</p>
              <p className="contact-value">Senin - Jumat: 09.00 - 17.00 WIB</p>
            </div>
          </div>

          {/* Telepon */}
          <div className="contact-item">
            <div className="contact-icon-box">
              <HiOutlinePhone className="contact-icon" />
            </div>
            <div className="contact-text">
              <p className="contact-label">Telepon</p>
              <p className="contact-value">+62 812-3456-7890</p>
            </div>
          </div>

          {/* Email */}
          <div className="contact-item">
            <div className="contact-icon-box">
              <HiOutlineMail className="contact-icon" />
            </div>
            <div className="contact-text">
              <p className="contact-label">Email</p>
              <p className="contact-value">tiravanashop@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;