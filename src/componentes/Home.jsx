import React from "react";
import { Link } from "react-router-dom"
import '../componentes/Home.css'

export const Home = () => {
  return (
    <main>
      <div className="body-home">
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/about">Sobre Nosotros</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
          <Link to="/login">
            <button className="login-button">Ingresar</button>
          </Link>
        </nav>

        <div className="overlay">
          <h1>La Bitácora <br /> Del Viajero</h1>
        </div>
      </div>

      {/* Section del Blog que aparece después de la imagen */}
      <section className="section-blog">
        <h2>Blog de viajes | La Bitácora Del Viajero 🌎✈️</h2>

        <p><strong>¡Bienvenidos a La Bitácora Del Viajero!</strong></p>
        <p>Tu fuente de inspiración para explorar el mundo de manera auténtica y memorable. Aquí encontrarás:</p>
        <ul>
        <li><strong>✨ Experiencias inolvidables:</strong> Desde la vibrante vida urbana hasta el encanto de playas paradisíacas y rutas de senderismo que te desconectan de lo cotidiano.</li>
        <li><strong>🌍 Guías completas y consejos prácticos:</strong> Para ayudarte a planear cada detalle de tu próxima aventura, ya sea una escapada de fin de semana o un viaje prolongado.</li>
        <li><strong>💡 Tips para viajeros inteligentes:</strong> Descubre cómo ahorrar y aprovechar al máximo cada destino, sin perderte de lo esencial.</li>
    </ul>

    <p>En <strong>La Bitácora Del Viajero</strong>, creemos que cada viaje tiene el poder de transformar, y estamos aquí para acompañarte en cada paso de tu exploración. Nos inspira una forma de viajar accesible, responsable y auténtica.</p>
    <p><strong>¡Únete a nuestra comunidad de viajeros</strong> y prepárate para ver el mundo con nuevos ojos!</p>

        </section>
      <section className="section-gallery">
        <h2>Galería de Fotos</h2>
        <div className="gallery-grid">
          <img src="/src/img/Lugar1.jpg" alt="Foto 1" />
          <img src="/src/img/Lugar2.jpg" alt="Foto 2" />
          <img src="/src/img/Lugar8.jpg" alt="Foto 8" />
          <img src="/src/img/Lugar4.jpg" alt="Foto 4" />
          <img src="/src/img/Lugar7.jpg" alt="Foto 5" />
          <img src="/src/img/Lugar6.jpg" alt="Foto 6" />
  
        </div>
      </section>
    </main>
  );
}

