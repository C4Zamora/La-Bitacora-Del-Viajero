import React from "react";
import '../componentes/Login.css'

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
            <label htmlFor="username">Nombre de usuario</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Registrarse</button>
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