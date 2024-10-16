import React from 'react'
import logo from "../assets/LogoMejorado.png"
import "../Css/Header.css";
import { useNavigate } from 'react-router-dom';







const Header = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login')
  }

  return (
    <div className='header'>
      <a className="enlace-logo" href="/"><img className='logo' src={logo} /></a>
      <h1> Fuego & Vino</h1>
      <div className='contenedorBotones'>
        {token ? (<>
          <button className='btn'><a href="/Usuario"> Mi Perfil</a></button>
          <button className='btn' onClick={handleLogout}>Cerrar sesión</button>
        </>) :
          <>
            <a className='btn  btn-lg' href="./Login">Iniciar Sesion</a>
            <a className='btn btn-lg' href="./registrar">Resgistrarse</a>
          </>

        }

      </div>
    </div>

  )
}

export default Header
