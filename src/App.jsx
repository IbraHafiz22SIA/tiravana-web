import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import UmkmProfile from "./pages/UmkmProfile";
import ProductKatalog from "./pages/ProductKatalog";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar GLOBAL */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/umkm-profile" element={<UmkmProfile />} />
        <Route path="/product-katalog" element={<ProductKatalog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
