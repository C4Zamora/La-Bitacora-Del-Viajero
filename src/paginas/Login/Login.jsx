import React from "react";
import './login.css';

function Login () {
    return ( 
        <div className={styles.container}>
      {/* Sección del formulario */}
      <div className={styles.loginForm}>
        <h2>Iniciar Sesión</h2>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" placeholder="Ingresa tu correo" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Ingresa tu contraseña" required />
          </div>
          <button type="submit" className={styles.btn}>Ingresar</button>
        </form>
      </div>

      {/* Sección de la imagen */}
      <div className={styles.loginImage}>
        <img 
          src="https://via.placeholder.com/800x600" 
          alt="Imagen decorativa" 
        />
      </div>
    </div>
   
     );
}

export default Login;