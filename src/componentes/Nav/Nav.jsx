import React from "react";
import './Nav.css'

const Nav = () => {
  return (
    <>
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
        <button className="login-button">Ingresar</button>
      </nav>

      <div className="overlay">
        <h1>La Bitácora <br/> Del Vijero.</h1>
        
      </div>
    </>
  );
};

export default Nav;
