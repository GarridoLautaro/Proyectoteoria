import { Link } from "react-router-dom";

const PRODUCT_PRICE = "$98,979.89";
const PRODUCT_NAME = "Logitech G Pro X Superlight";
const productImg =
  "https://images.logitechg.com/en-us/products/mice/pro-x-superlight-2-wireless-gaming-mouse/gallery/pro-x-superlight-2-black-gallery-1.webp?w=640"; // placeholder oficial

function ProductCard() {
  return (
    <article className="card product-card">
      <div className="product-thumb">
        <img src={productImg} alt="Mouse" />
      </div>
      <div className="product-meta">
        <span className="kicker">Mouse</span>
        <h3 className="title">{PRODUCT_NAME}</h3>
        <p className="price">{PRODUCT_PRICE}</p>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner container">
          <div className="hero-badge">CYBER</div>
          <div className="hero-title">MONDAY</div>
          <Link className="btn-primary" to="/ofertas">SHOP NOW!</Link>
          <p className="hero-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div className="hero-dots" aria-hidden="true">
            <span className="dot active" />
            <span className="dot" />
            <span className="dot" />
          </div>
        </div>
      </section>

      {/* DESTACADOS */}
      <section className="section container">
        <h2 className="section-title">DESTACADOS</h2>
        <p className="section-sub">Compra los productos más vendidos de la página</p>

        <div className="product-grid">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>

      {/* NOSOTROS */}
      <section className="section about">
        <div className="container about-grid">
          <div className="about-photos">
            <img
              className="photo"
              src="https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=1200&auto=format&fit=crop"
              alt="Equipo 1"
            />
            <img
              className="photo"
              src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1200&auto=format&fit=crop"
              alt="Equipo 2"
            />
          </div>

          <div className="about-copy">
            <h2>NOSOTROS</h2>
            <p>
              Somos cuatro webones de la EPET N°20 que nos juntamos con un objetivo claro:
              crear este sitio web para aprobar la materia Programación Web Dinámica.
            </p>
            <p>
              No somos una gran empresa ni un equipo de desarrolladores con años de experiencia:
              somos simplemente 4 webones con ganas de aprender, meterle mano al código y demostrar
              que podemos llevar una idea a la práctica.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
