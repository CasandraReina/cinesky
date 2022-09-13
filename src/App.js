import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import HeaderPelicula from './HeaderPelicula';
import Cartelera from './Cartelera.js';
import Pelicula from './Pelicula.js';
import FooterPelicula from './FooterPelicula.js';
//import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <Header/>
     <Main/>
     <Footer/>
     <HeaderPelicula/>
     <Cartelera/>
     <Pelicula/>
     <FooterPelicula/>
    </>
  );
}

export default App;
