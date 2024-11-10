import React from "react";
import '../componentes/Registro.css'

export const Registro = () => {
  return (
          <main>
     
       <div className="registro-container">
      {/* Lado izquierdo: formulario de registro */}
      <div className="form-registro-container">
        
        <form action="#" method="POST">
          <h1>Registrate</h1>
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
      type="email"
      id="email"
      name="password"
      placeholder="Correo"
      required
    /></div>
  <div className="form-group">
    <input
      type="password"
      id="password"
      name="password"
      placeholder="Contraseña"
      required
    />
  </div>
  <button className="button-form" type="submit">Registrar</button>
  <div className="registrate-container">
      
  </div>
</form>
</div>
</div>
    
    
    </main>
  )
}