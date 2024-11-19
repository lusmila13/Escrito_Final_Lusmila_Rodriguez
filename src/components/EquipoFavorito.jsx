import React, { useEffect, useState } from "react";
import "./EquipoFavorito.css";

function EquipoFavorito() {
  const [equipo, setEquipo] = useState(null);

  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Uruguayan%20Primera%20Division"
    )
      .then((response) => response.json())
      .then((data) => {
        // Elegir el equipo favorito
        const favorito = data.teams.find(
          (team) => team.strTeam === "Club Nacional de Futbol"
        );
        setEquipo(favorito);
      });
  }, []);

  if (!equipo) return <p>Cargando equipo favorito...</p>;

  return (
    <div className="equipo-favorito">
      <h2>{equipo.strTeam}</h2>
      <img src={equipo.strBadge} alt={`${equipo.strTeam} logo`} />
      <p><strong>Año de Fundación:</strong> {equipo.intFormedYear}</p>
      <p><strong>Estadio:</strong> {equipo.strStadium}</p>
      <div className="redes-sociales">
        <a href={`https://${equipo.strFacebook}`} target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href={`https://${equipo.strTwitter}`} target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href={`https://${equipo.strInstagram}`} target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
  );
}

export default EquipoFavorito;