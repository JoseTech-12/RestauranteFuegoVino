
import { Outlet, Navigate } from "react-router-dom";
import { logout } from "../services/ReservaServices";



const UsuarioProtegido = () => {

    const token = localStorage.getItem('token')

    return token ? <Outlet /> : <Navigate to="/Login" />;
}

export default UsuarioProtegido