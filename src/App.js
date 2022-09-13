import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import HeaderPelicula from './HeaderPelicula';
import Cartelera from './Cartelera.js';
import Peliculas from './Peliculas.js';
import Footer2 from './Footer2.js';
//import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Header/>
    <Main/>
    <Footer/>
    <HeaderPelicula/>
     <Cartelera/>
     <Peliculas/>
     <Footer2/>
    </>
  );
}

export default App;
