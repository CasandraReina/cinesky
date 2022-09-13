import Pelicula from './Pelicula.js';
import FooterPelicula from './FooterPelicula.js';
import HeaderPelicula from './HeaderPelicula.js';
import Cartelera from './Cartelera.js';
import React from 'react';

function SegundaPagina(){
  return (
    <>
     <HeaderPelicula/>
     <Cartelera/>
     <Pelicula/>
     <FooterPelicula/>
    </>
  );
}

export default SegundaPagina;
