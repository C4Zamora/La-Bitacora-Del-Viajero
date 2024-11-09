import React from "react";
import { Link } from "react-router-dom"
import '../componentes/Home.css'
import Footer from '../componentes/Footer'; // Importa el componente Header
import HistoriasViajeros from "./HistoriasViajeros";


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

        
       
        {/* SVG de la onda */}
        <div className="wave">
        <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 300"
        xmlns="http://www.w3.org/2000/svg"
        className="wave"
      >

        {/* Este es un comentario en JSX 
        <style>
          {`
          .path-0 {
            animation: pathAnim-0 5s linear infinite;
          }
          @keyframes pathAnim-0 {
            0% { d: path("M 0,400 L 0,225 C 124.32142857142861,258.44642857142856 248.64285714285722,291.89285714285717 380,284 C 511.3571428571428,276.10714285714283 649.7499999999998,226.875 778,200 C 906.2500000000002,173.125 1024.357142857143,168.60714285714286 1133,139 C 1241.642857142857,109.39285714285714 1340.8214285714284,54.69642857142857 1440,0 L 1440,400 L 0,400 Z"); }
            25% { d: path("M 0,400 L 0,225 C 115.64285714285714,266.3392857142857 231.28571428571428,307.67857142857144 351,294 C 470.7142857142857,280.32142857142856 594.5,211.625 703,162 C 811.5,112.375 904.7142857142858,81.82142857142858 1025,58 C 1145.2857142857142,34.17857142857142 1292.642857142857,17.08928571428571 1440,0 L 1440,400 L 0,400 Z"); }
            50% { d: path("M 0,400 L 0,225 C 80.10714285714286,209.01785714285714 160.21428571428572,193.03571428571428 293,177 C 425.7857142857143,160.96428571428572 611.25,144.875 756,133 C 900.75,121.125 1004.7857142857142,113.46428571428571 1112,92 C 1219.2142857142858,70.53571428571429 1329.607142857143,35.267857142857146 1440,0 L 1440,400 L 0,400 Z"); }
            75% { d: path("M 0,400 L 0,225 C 151.64285714285717,221.73214285714286 303.28571428571433,218.46428571428572 412,209 C 520.7142857142857,199.53571428571428 586.5,183.875 706,147 C 825.5,110.125 998.7142857142858,52.035714285714285 1130,24 C 1261.2857142857142,-4.035714285714284 1350.642857142857,-2.017857142857142 1440,0 L 1440,400 L 0,400 Z"); }
            100% { d: path("M 0,400 L 0,225 C 124.32142857142861,258.44642857142856 248.64285714285722,291.89285714285717 380,284 C 511.3571428571428,276.10714285714283 649.7499999999998,226.875 778,200 C 906.2500000000002,173.125 1024.357142857143,168.60714285714286 1133,139 C 1241.642857142857,109.39285714285714 1340.8214285714284,54.69642857142857 1440,0 L 1440,400 L 0,400 Z"); }
          }
          `}
        </style>*/}
        <path
          d="M 0,400 L 0,225 C 124.32142857142861,258.44642857142856 248.64285714285722,291.89285714285717 380,284 C 511.3571428571428,276.10714285714283 649.7499999999998,226.875 778,200 C 906.2500000000002,173.125 1024.357142857143,168.60714285714286 1133,139 C 1241.642857142857,109.39285714285714 1340.8214285714284,54.69642857142857 1440,0 L 1440,400 L 0,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#FFFF"
          fillOpacity="1"
          className="path-0"
        ></path>
      </svg>


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

      <HistoriasViajeros></HistoriasViajeros>

      <Footer> </Footer>

      
     
    </main>
  );
}

