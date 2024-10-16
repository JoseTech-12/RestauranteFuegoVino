
import { Routes, Route } from "react-router-dom"
import Administrador from "../Pages/Administrador"
import Login from "../Pages/Login"
import Usuario from "../Pages/Usuario"
import Menu from "../Pages/Menu"
import Fechas from "../Pages/Fechas"
import Reservas from "../Pages/Reservas"
import RecContra from "../Pages/RecContra"
import CrearCuenta from "../Pages/CrearCuenta"
import Principal from "../Pages/Principal"
import MostrarReservas from "../Pages/MostrarReservas"
import UsuarioProtegido from "../Pages/UsuarioProtegido"
import LoginProtegido from "../Pages/LoginProtegido"
import path from "path"


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />


      <Route path="/" element={<LoginProtegido />}>
        <Route path="Login" element={<Login />} />
      </Route>



      <Route path="/" element={<UsuarioProtegido />}>
        <Route path="Usuario" element={<Usuario />} />
      </Route>

      <Route path="/Administrador" element={<Administrador />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Fechas" element={<Fechas />} />
      <Route path="/Reservas" element={<Reservas />} />
      <Route path="/RecContra" element={<RecContra />} />
      <Route path="/registrar" element={<CrearCuenta />} />
      <Route path="/MostrarReservas" element={<MostrarReservas />} />
    </Routes>
  )
}

export default Router