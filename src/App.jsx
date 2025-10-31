import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/Home.jsx";

function Placeholder({ title }) {
  return (
    <div className="container page-placeholder">
      <h1>{title}</h1>
      <p>Contenido en construcción.</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Placeholder title="Productos" />} />
          <Route path="/ofertas" element={<Placeholder title="Ofertas" />} />
          <Route path="/soporte" element={<Placeholder title="Soporte" />} />
          <Route path="/nosotros" element={<Placeholder title="Nosotros" />} />
          <Route path="*" element={<Placeholder title="404 - No encontrado" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
