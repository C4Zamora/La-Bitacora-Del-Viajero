import React from "react";
import '../componentes/Registro.css'
import { useState } from "react";

import { useNavigate } from "react-router-dom";


export const Registro = () => {
  const urlApi = "https://6740fd35d0b59228b7f1f288.mockapi.io/api/v1";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
      createdAt: new Date().toISOString(),
      avatar: "https://avatar.iran.liara.run/public",
    };
    fetch(`${urlApi}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    navigate("/La-Bitacora-Del-Viajero/login");
  };

  const goLogin = () => {
    navigate("/La-Bitacora-Del-Viajero/login");
  };




  return (
          <main>
     
       <div className="registro-container">
      {/* Lado izquierdo: formulario de registro */}
      <div className="form-registro-container">
        
        <form onSubmit={onSubmit}>
          <h1>Registrate</h1>
  <div className="form-group">
    <input
      type="text"
      name="name"
      placeholder="Nombre de usuario"
      required
      onChange={onChange}
    />
  </div>
  <div className="form-group">
    <input
      type="email"
      name="email"
      placeholder="Correo"
      required
      onChange={onChange}
    /></div>
  <div className="form-group">
    <input
      type="password"
      name="password"
      placeholder="Contraseña"
      required
      onChange={onChange}
    />
  </div>

  <button className="button-form" type="submit">Registrarse</button>
  <div className="registrate-container">
      
  </div>
</form>
</div>
</div>
    
    
    </main>
  )
}