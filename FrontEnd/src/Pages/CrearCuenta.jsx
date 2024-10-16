import React from 'react'
import "../Css/CrearCuenta.css"
import logo from "../assets/logo.png"
import { useState } from 'react'
import { register } from '../services/ReservaServices'
import { useNavigate } from 'react-router-dom'

const CrearCuenta = () => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');

    const navigete = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = { nombre, telefono, email, contraseña };
            const response = await register(userData);
            setMensaje('Usuario registrado exitosamente');
            setError('');
            navigete('/login')
        } catch (error) {
            setError('Error al registrar el usuario. Inténtalo de nuevo.');

            setMensaje('');
        }
    };


    return (
        <div>
            <div className="crear">
                <div className="logocontenedor">
                    <img src={logo} alt="Logo del restaurante" className="logo" />
                </div>

                <h2>Crea una Cuenta</h2>

                <h3>¿Aún no tienes una cuenta? </h3>
                <h4>Regístrate para acceder a promociones y reservas exclusivas.</h4>

                <form onSubmit={handleSubmit} className="formulario">
                    <div className="grupo">
                        <label htmlFor="nombre">Nombre Completo:</label>
                        <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre completo" required />
                    </div>

                    <div className="grupo">
                        <label htmlFor="confirmacion">telefono:</label>
                        <input value={telefono} onChange={(e) => setTelefono(e.target.value)} type="text" id="confirmacion" name="confirmacion" placeholder="Ingrese telefono" required />
                    </div>

                    <div className="grupo">
                        <label htmlFor="email">Correo Electrónico:</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Ingresa tu correo electrónico" required />
                    </div>

                    <div className="grupo">
                        <label htmlFor="password">Contraseña:</label>
                        <input value={contraseña} onChange={(e) => setContraseña(e.target.value)} type="password" id="password" name="password" placeholder="Crea una contraseña" required />
                    </div>


                    <button type="submit" className="btncrear">Crear Cuenta</button>
                    {mensaje && <p>{mensaje}</p>}
                    {error && <p>{error}</p>}
                </form>


            </div>

        </div>
    )
}

export default CrearCuenta