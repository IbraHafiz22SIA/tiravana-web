import { Link } from "react-router-dom";
import "./Footer.css";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3 className="footer-logo">Tiravana</h3>
          <p>
            Produk berkelanjutan untuk masa depan yang lebih hijau. Dibuat dari
            plastik daur ulang, dirancang dengan mempertimbangkan alam.
          </p>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Shop</h4>
          <ul>
            <li>Shopee</li>
            <li>Tokopedia</li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Extra */}
        <div className="footer-column">
          <h4>Connect</h4>
          <ul>
            <li>Instagram</li>
            <li>TikTok</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Tiravana. Semua hak dilindungi.</p>
      </div>
    </footer>
  );
}

export default Footer;
