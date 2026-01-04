import "./Testimonial.css";

function Testimonial() {
  return (
    <section className="testimonial">
      <h2 className="testimonial-title">Apa Kata Pelanggan Kami</h2>

      <p className="testimonial-description">
        Dengarkan dari komunitas kami yang puas tentang pengalaman mereka
        dengan produk dan misi berkelanjutan Tiravana.
      </p>

      <div className="testimonial-cards">
        {/* Card 1 */}
        <div className="testimonial-card">
          <p className="testimonial-text">
            “Saya sangat terkesan dengan kualitas produk Tiravana. Tempat
            gelasnya kokoh dan desainnya modern. Di samping itu, saya turut
            merasa berkontribusi untuk lingkungan!”
          </p>

          <div className="testimonial-footer">
            <strong>Andi S.</strong>
            <span>Pecinta Lingkungan</span>
            <div className="stars">★★★★★</div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="testimonial-card">
          <p className="testimonial-text">
            “Nampan serbaguna ini sungguh praktis dan indah. Warnanya natural
            dan teksturnya unik. Pengiriman cepat dan kemasan ramah lingkungan.”
          </p>

          <div className="testimonial-footer">
            <strong>Budi H.</strong>
            <span>Pecinta Lingkungan</span>
            <div className="stars">★★★★★</div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="testimonial-card">
          <p className="testimonial-text">
            “Saya mencari jam dinding yang unik dan ramah lingkungan, dan
            Tiravana punya jawabannya. Jam dindingnya menjadi titik fokus di
            ruang tamu saya.”
          </p>

          <div className="testimonial-footer">
            <strong>Citra A.</strong>
            <span>Desainer Interior</span>
            <div className="stars">★★★★☆</div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="testimonial-card">
          <p className="testimonial-text">
            “Produk yang luar biasa dengan misi yang mulia. Senang sekali bisa
            mendukung bisnis yang peduli terhadap lingkungan. Kualitasnya
            melebihi ekspektasi saya.”
          </p>

          <div className="testimonial-footer">
            <strong>Rizky P.</strong>
            <span>Aktivis Keberlanjutan</span>
            <div className="stars">★★★★★</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;