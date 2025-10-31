import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        {/* Logo + marca */}
        <Link to="/" className="brand">
          <span className="brand-icon">🍊</span>
          <span className="brand-name">
            <strong>TECH</strong> ORANGE
          </span>
        </Link>

        {/* Buscador */}
        <div className="searchbox">
          <input type="text" placeholder="Buscar productos..." />
          <button aria-label="Buscar">
            <span className="icon">🔍</span>
          </button>
        </div>

        {/* Acciones derecha */}
        <div className="right-actions">
          <button className="icon-btn" title="Mi perfil">👤</button>
          <button className="icon-btn" title="Carrito">🛒</button>
        </div>
      </div>

      {/* Menú principal */}
      <nav className="navmenu">
        <div className="container navmenu-inner">
          <NavLink to="/productos" className="navlink">Productos</NavLink>
          <NavLink to="/ofertas" className="navlink">Ofertas</NavLink>
          <NavLink to="/soporte" className="navlink">Soporte</NavLink>
          <NavLink to="/nosotros" className="navlink">Nosotros</NavLink>
        </div>
      </nav>
    </header>
  );
}
