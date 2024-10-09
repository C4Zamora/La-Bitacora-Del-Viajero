 import React from "react"
 import ReactDOM from 'react-dom/client'
 import Footer from "./componentes/Footer/Footer"
 import { Nav } from "./assets/nav"
 import Home from "./paginas/Home/Home"
 import image from './assets/img/banner.jpeg'

 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Footer/>
     <Nav></Nav>
     <Nav></Nav>
     <Home></Home>
     <imagenBanner></imagenBanner>
   
 


  </React.StrictMode>,
 )

 function image() {
   return ( 
      <img src={image} />
    );
 }
 
 export default image;

 
