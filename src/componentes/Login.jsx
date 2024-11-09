import React from "react";
import '../componentes/Login.css'
import { Link } from "react-router-dom"

export const Login = () => {
  return (
    <main>
       <div className="login-container">
      {/* Lado izquierdo: formulario de registro */}
      <div className="form-container">
        
        <form action="#" method="POST">
          <h1>Bienvenido</h1>
          <p>Ingresa con tu usuario</p>
  <div className="form-group">
    <input
      type="text"
      id="username"
      name="username"
      placeholder="Nombre de usuario"
      required
    />
  </div>
  <div className="form-group">
    <input
      type="password"
      id="password"
      name="password"
      placeholder="Contraseña"
      required
    />
  </div>
  <button className="button-form" type="submit">Ingresar</button>
  <div className="registrate-container">
  <p>¿No tientes una cuenta?</p>
          <Link to="/Registro">
            <h3>Registrate</h3>
          </Link>
  </div>
</form>
</div>
  
      

      {/* Lado derecho: imagen */}
      <div className="image-container">
        <img src="/src/img/login.jpeg" alt="Imagen de fondo" />
      </div>
    </div>
    
    </main>
  )
}