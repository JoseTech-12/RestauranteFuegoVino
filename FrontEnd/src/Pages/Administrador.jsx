import "../Css/StyleAdmin.css";
import img1 from "../assets/Menu.jpg";
import img2 from "../assets/Disponibilidad.jpg";
import img3 from "../assets/GestionC.jpg";
import img4 from "../assets/Reservas.jpg";
import img5 from "../assets/Historial.jpg";
import img6 from "../assets/Reseñas.jpg";
import React, { useState } from "react";

const Administrador = () => {
  const nombre = "";
  const [mostrarVentana, setMostrarVentana] = useState("");
  const handleReseñaClick = (info) => {
    setMostrarVentana(info);
  };

  const handleCerrarclick = () => {
    setMostrarVentana("");
  };
  return (
    <div>
      <h2>Bienvenido administrador {nombre}</h2>
      <div className="row">
        <div className="col col-md-6">
          <div className="colP">
            <img src={img1} alt="" className="img1" />
            <button
              className="btn btn-primary btni"
              onClick={() => handleReseñaClick("Actualizar menu")}
            >
              Actualizar menu
            </button>
          </div>
          <div className="colP">
            <img src={img2} alt="" className="img1" />
            <button
              className="btn btn-primary btni"
              onClick={() => handleReseñaClick("Ver Disponibilidad")}
            >
              {" "}
              Ver Disponibilidad
            </button>
          </div>
          <div className="colP">
            <img src={img3} alt="" className="img1" />
            <button
              className="btn btn-primary btni"
              onClick={() => handleReseñaClick("Reseñas")}
            >
              Gestionar Contenido
            </button>
          </div>
        </div>
        <div className="col col-md-6">
          <div className="colP">
            <img src={img4} alt="" className="img1" />
            <button
              className="btn btn-primary btni">
              <a href="./MostrarReservas">Ver Reservas</a>
            </button>
          </div>
          <div className="colP">
            <img src={img5} alt="" className="img1" />
            <button
              className="btn btn-primary btni"
              onClick={() => handleReseñaClick("Reseñas")}
            >
              Historial
            </button>
          </div>
          <div className="colP">
            <img src={img6} alt="" className="img1" />
            <button
              className="btn btn-primary btni"
              onClick={() => handleReseñaClick("Reseñas")}
              id="btnReseña"
            >
              Reseñas
            </button>
          </div>
        </div>
      </div>

      <div id="Prueba" className={mostrarVentana ? "VerReseña" : "Hidde"}>
        <h3>{mostrarVentana}</h3>
        <button className="btn btn-danger X" onClick={handleCerrarclick}>
          X
        </button>
      </div>
    </div>
  );
};

export default Administrador;
