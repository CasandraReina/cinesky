import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import React from "react";

class HeaderPelicula extends React.Component{
render(){
    return(
        <header class="Fondo">
          <div class="contenedor">
            <h4 class="logotipo">CINESKY</h4>
            <nav>
                <a href="./App.js">Inicio</a>
                <a href="./App2.js" class="active">Cartelera</a>
                <a href="#">Mas Recientes</a>
                <a href="#">Mi Lista</a>
            </nav>
          </div>
    </header> 
    )
}
}
export default HeaderPelicula;