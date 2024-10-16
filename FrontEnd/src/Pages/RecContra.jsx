import React, { useDebugValue } from 'react'
import "../Css/RecContra.css"
import logo from "../assets/logo.png"
const RecContra = () => {
    return (

        <div className="principal">
            <div>
                <div>
                    <div className="logocontenedor">
                        <img src={logo} alt="Logo del restaurante" className="logo" />
                    </div>

                    <h2>Recuperar Contraseña</h2>

                    <h3>Ingresa tu correo electrónico para recibir un enlace de recuperación de contraseña.</h3>

                    <form action="#" method="POST" className="formulario">
                        <div className="grupo">
                            <label htmlFor="email">Correo Electrónico:</label>
                            <input type="email" id="email" name="email" placeholder="Ingresa tu correo electrónico" required />
                        </div>

                        <button type="submit" className="btnregreso">Enviar enlace de Recuperación</button>
                    </form>

                </div>

            </div>
        </div>

    )
}


export default RecContra