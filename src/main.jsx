 import React from "react"
 import ReactDOM from 'react-dom/client'

 import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import Nav from "./componentes/Nav/Nav"


 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />           {/* Ruta Home */}
   
      </Routes>
    </BrowserRouter>
 

  </React.StrictMode>,
 )
