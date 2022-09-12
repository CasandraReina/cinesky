import React from "react";

class Main extends React.Component{
render(){
    return(
        <div className="PortadaCine">
    <div className="contenedor">
      <p>Puntuacion</p>
      <i className="heart fa-solid fa-heart"></i>
      <i className="heart fa-solid fa-heart"></i>
      <i className="heart fa-solid fa-heart"></i>
      <i className="heart fa-regular fa-heart"></i>
      <i className="heart fa-regular fa-heart"></i>
      <h3 className="Titulo">ENCANTO</h3>
      <p className="Descripcion"> La magia del Encanto ha bendecido a cada niño de la familia con un don único, desde la superfuerza hasta el poder de sanar; a todos, excepto Mirabel, quien desea ser tan especial como el resto de su familia. Pero cuando la magia que rodea al Encanto está en peligro, Mirabel decide que ella, la única Madrigal sin ningún tipo de don único, puede ser la única esperanza de su excepcional familia.
      </p>

      <a className="VerTrailer" href="https://www.youtube.com/watch?v=E4dCY_DvT-4">Ver Trailer</a>
      <a className="VerTrailer" href="#">Comprar Entrada</a>
    </div>
</div>
    )
}
}
export default Main;