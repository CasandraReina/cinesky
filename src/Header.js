import React from "react";

class Header extends React.Component{
    render()
    {
        return(
            <header>
            <div className="contenedor">
                <h2 className="logotipo">CINESKY</h2>
                <nav>
                    <a href="#" className="active">Inicio</a>
                    <a href="./SegundaPagina.js">Cartelera</a>
                    <a href="#">Mas Recientes</a>
                    <a href="#">Mi Lista</a>
                </nav>
            </div>
        </header>
        )
    }
}
export default Header;