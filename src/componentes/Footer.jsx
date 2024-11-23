import React from "react";
import '../componentes/Footer.css'

export const Footer = () => {
  return (
    <main>
        <footer>
    <div class="footer-content">
        <h3>Explora el Mundo</h3>
        <p>Un blog de viajes para aventureros apasionados por descubrir el mundo.</p>
        <ul class="footer-nav">
            <li><a href="#about">Sobre Nosotros</a></li>
            <li><a href="#destinations">Destinos</a></li>
            <li><a href="#contact">Contacto</a></li>
            <li><a href="#privacy">Política de Privacidad</a></li>
        </ul>
        <div class="social-media">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#twitter">Twitter</a>
        </div>
    </div>
    <p class="footer-copy">&copy; 2024 Explora el Mundo - Todos los derechos reservados</p>
    <img src="img/Hojas4.png" alt="Imagen" class="footer-image" />
</footer>
    
    </main>
  )
}
export default Footer;