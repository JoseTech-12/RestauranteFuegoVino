import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";



const LoginProtegido = () => {

    const token = localStorage.getItem('token');

    return token ? <Navigate to='/Usuario' /> : <Outlet />

}

export default LoginProtegido