import { useState, useEffect } from "react"
import { obtenerUsuario } from "../services/ReservaServices"



const MostrarUsuarios = () => {
    const [usuario, setUsuario] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchUsuario();
    }, [])

    const fetchUsuario = async () => {
        try {
            const listado = await obtenerUsuario()
            setUsuario(listado)
        } catch (error) {
            setError(error)
        }
    }


    return (
        <div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre del cliente</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Email</th>

                    </tr>
                </thead>
                <tbody>

                    {usuario.map((u) => (
                        <tr key={u.id_Cliente}>
                            <th>{u.id_Cliente}</th>
                            <th>{u.Nombre}</th>
                            <th>{u.Telefono}</th>
                            <th>{u.Email}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MostrarUsuarios