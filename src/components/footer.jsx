import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        <div className="foot-col">
          <h4>Secciones</h4>
          <ul className="foot-list">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/ofertas">Destacados</Link></li>
            <li><Link to="/soporte">Soporte</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/perfil">Mi perfil</Link></li>
            <li><Link to="/carrito">Carrito</Link></li>
          </ul>
        </div>

        <div className="foot-col">
          <h4>Contacto</h4>
          <ul className="foot-list">
            <li>📞 2996286057</li>
            <li>✉️ <a href="mailto:laurang2018@gmail.com">laurang2018@gmail.com</a></li>
            <li>✉️ <a href="mailto:TechInformatica@gmail.com">TechInformatica@gmail.com</a></li>
          </ul>

          <div className="helper-row">
            <Link to="/soporte" className="btn-link">Ayuda | Soporte técnico</Link>
          </div>
          <button className="btn-secondary">BOTÓN DE ARREPENTIMIENTO</button>
        </div>

        <div className="foot-col">
          <h4>Ubicación</h4>
          <p>María Curie 2375, Neuquén Capital, Q8300 CP</p>
          <div className="map-card">
            {/* Mapa embebido estático (placeholder) */}
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?center=-38.9516,-68.0591&zoom=15&size=600x300&markers=-38.9516,-68.0591&key=AIzaSyD-PLACEHOLDER"
              alt="Mapa (placeholder)"
            />
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Tech Orange — Todos los derechos reservados.
      </div>
    </footer>
  );
}
