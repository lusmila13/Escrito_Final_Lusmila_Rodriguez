import React from "react";
import { Link } from "react-router-dom";
import "./Inicio.css";

function Inicio() {
  return (
    <div className="inicio">
      <h1>Bienvenido a la Primera División</h1>
      <Link to="/equipoFavorito" className="boton">
        Ver equipo favorito
      </Link>
    </div>
  );
}

export default Inicio;