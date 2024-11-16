import { useEffect, useState } from "react";
import React from "react";
import '../componentes/Login.css'
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const urlApi = "https://6622071827fcd16fa6c8818c.mockapi.io/api/v1";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${urlApi}/users`);
      
      const usersFromApi = await response.json();

      // Busca en la API si existe un usuario con el email y contraseña ingresados
      const user = usersFromApi.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {

        // Guarda los datos del usuario en localStorage si la autenticación fue exitosa
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/La-Bitacora-Del-Viajero/blog");
      } else {
        alert("Credenciales incorrectas. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error al validar el usuario:", error);
      alert("Hubo un problema al validar tus credenciales.");
    }
  };

  const goRegister = () => {
    navigate("/La-Bitacora-Del-Viajero/registro");
  }


  return (
    <main>
       <div className="login-container">
      {/* Lado izquierdo: formulario de registro */}
      <div className="form-container">
        
        <form onSubmit={onSubmit}>
          <h1>Bienvenido</h1>
          <p>Ingresa con tu usuario</p>
  <div className="form-group">
    <input
      type="email"
      name="email"
      placeholder="Correo electrónico"
      required
      onChange={onChange}
    />
  </div>
  <div className="form-group">
    <input
      type="password"
      name="password"
      placeholder="Contraseña"
      required
      onChange={onChange}
    />
  </div>

  
  <button type="submit" className="button-form" >Iniciar sesión</button>


  <div className="registrate-container">
  <p>¿No tientes una cuenta?</p>
            <h3 onClick={goRegister}>Registrate</h3>
        
  </div>
</form>
</div>
  
      

      {/* Lado derecho: imagen */}
      <div className="image-container">
        <img src="img/login.jpeg" alt="Imagen de fondo" />
      </div>
    </div>
    
    </main>
  )
}