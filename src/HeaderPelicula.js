//import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import React from "react";

class HeaderPelicula extends React.Component{
render(){
    return(
      <header className="Fondo">
      <div className="contenedor">
          <h4 className="logotipo">CINESKY</h4>
          <nav>
              <a href="./PaginaPrincipal.js">Inicio</a>
              <a href="/SegundaPagina.js" className="active">Cartelera</a>
              <a href="#">Mas Recientes</a>
              <a href="#">Mi Lista</a>
          </nav>
      </div>
  </header> 
    )
}
}
export default HeaderPelicula;