import axios from 'axios'


const api = 'http://localhost:8082';

export const obtenerReservas = async () => {

    const respuesta = await axios.get(`${api}/mostrarReservas`)
    return respuesta.data

}

export const obtenerMesas = async () => {
    try {
        const respuesta = await axios.get(`${api}/mesas`);
        return respuesta.data
    } catch (error) {
        throw error

    }
}

export const obtenerUsuario = async () => {
    const respuesta = await axios.get(`${api}/mostrarUsuario`)
    return respuesta.data
}


export const register = async (userData) => {
    try {
        const response = await axios.post(`${api}/registrar`, userData);
        return response.data;

    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        throw error;
    }
};

export const reservar = async (userData) => {

    try {
        const response = await axios.post(`${api}/reservar`, userData)
        return response.data

    } catch (error) {
        console.error('error al realizar la reserva', error)
        throw error
    }
}


export const login = async (userData) => {
    try {
        const response = await axios.post(`${api}/login`, userData)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('nombre', response.data.user.nombre)
        localStorage.setItem('id', response.data.user.id)

        return response.data


    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }

}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('nombre')
};


export const eliminar = async (id_Reserva) => {
    const respuesta = await axios.delete(`${api}/reserva:${id_Reserva}`)

}