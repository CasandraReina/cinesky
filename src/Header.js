import React from "react";
class Header extends React.Component{
    render()
    {
        return(
            <header>
        <div class="contenedor">
            <h2 class="logotipo">CINESKY</h2>
            <nav>
                <a href="#" class="active">Inicio</a>
                <a href="peliculas.html">Cartelera</a>
                <a href="#">Mas Recientes</a>
                <a href="#">Mi Lista</a>
            </nav>
        </div>
    </header>
        )
    }
}
export default Header;