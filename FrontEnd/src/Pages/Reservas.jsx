import React from 'react'
import "../Css/Reservas.css"
import logo from "../assets/logo.png"

const Reservas = () => {
    return (
        <div>
            <div className="reservas">
                <div className="logo-container">
                    <img src={logo} alt="Logo del restaurante" className="logo" />
                </div>
                <h2>Haz tu Reserva</h2>
                <form action="#" method="POST" className="form-reserva">
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre Completo:</label>
                        <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre completo" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico:</label>
                        <input type="email" id="email" name="email" placeholder="Ingresa tu correo electrónico" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="telefono">Teléfono:</label>
                        <input type="tel" id="telefono" name="telefono" placeholder="Ingresa tu número de teléfono" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="fecha">Fecha de Reserva:</label>
                        <input type="date" id="fecha" name="fecha" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="hora">Hora de Reserva:</label>
                        <input type="time" id="hora" name="hora" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="personas">Número de Personas:</label>
                        <input type="number" id="personas" name="personas" min="1" placeholder="Número de personas" required />
                    </div>

                    <button type="submit" className="btn-reserva">Enviar Reserva</button>
                </form>

            </div>

        </div>
    )
}


export default Reservas