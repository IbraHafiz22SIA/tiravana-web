import "./Galeri.css";
import Galeri1 from "../assets/Galeri1.png";
import Galeri2 from "../assets/Galeri2.png";
import Galeri3 from "../assets/Galeri3.png";
import Galeri4 from "../assets/Galeri4.png";
import Galeri5 from "../assets/Galeri5.png";
import Galeri6 from "../assets/Galeri6.png";

function Galeri() {
  const dataGaleri = [
    { id: 1, url: Galeri1, alt: "Nampan Terrazzo" },
    { id: 2, url: Galeri2, alt: "Jam Dinding" },
    { id: 3, url: Galeri3, alt: "Jam Dinding" },
    { id: 4, url: Galeri4, alt: "Jam Dinding" },
    { id: 5, url: Galeri5, alt: "Jam Dinding" },
    { id: 6, url: Galeri6, alt: "Jam Dinding" },
  ];

  return (
    <section className="galeri-section">
      <div className="galeri-container">
        <h2 className="galeri-title">Galeri Produk & Material</h2>
        
        <div className="galeri-grid">
          {dataGaleri.map((item) => (
            <div key={item.id} className="galeri-item">
              <img src={item.url} alt={item.alt} className="galeri-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Galeri;