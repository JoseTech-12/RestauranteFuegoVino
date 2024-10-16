import React from 'react';
import "../Css/Login.css";
import logo from "../assets/logo.png";
import NavbarMenu from "../Componentes/Menu"
import { useState } from 'react'
import { login, register } from '../services/ReservaServices'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [contraseña, setContraseña] = useState('');
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { email, contraseña };
      const response = await login(userData);
      setMensaje('Usuario exitosamente');
      setError('');
      console.log(response)
      navigate("/Usuario")

    } catch (error) {
      setError('Error al registrar el usuario. Inténtalo de nuevo.');

      setMensaje('');
    }
  };


  const validar = (mensaje) => {
    if (mensaje) {
      return true
    }
    return false

  }


  return (

    <div>
      <NavbarMenu></NavbarMenu>
      <div className='login'>

        <div class="container">
          <div class="imagen">
            <img src={logo} alt="Logo del restaurante" />
          </div>
          <form onSubmit={handleSubmit} class="formulario">

            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Usuario" />

            <input value={contraseña} onChange={(e) => setContraseña(e.target.value)} type="password" placeholder="Contraseña" />
            <a href="./RecContra">¿Has olvidado tu contraseña?</a>
            <button type='submit' class="btn-regresar1">Login</button>
            {mensaje && <p>{mensaje}</p>}
            {error && <p>{error}</p>}
            <div class="crearcuenta">
              ¿No tienes una cuenta? <a href="./CrearCuenta">Crear cuenta</a>
            </div>

          </form>
        </div>

      </div>
    </div>
  )

}

export default Login;

