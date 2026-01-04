import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoTiravana from "../assets/Logo.jpeg"; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-wrapper">
          <img src={logoTiravana} alt="Tiravana Logo" className="navbar-logo-img" />
          <h2 className="logo-text">Tiravana</h2>
        </Link>

        {/* Menu Navigasi */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/umkm-profile">UMKM Profile</Link></li>
          <li><Link to="/product-katalog">Product Catalog</Link></li>
          <li><Link to="/contact" className="contact-btn">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;