import { useEffect, useState } from "react"
import { obtenerReservas, eliminar } from "../services/ReservaServices.js"
import { Await } from "react-router-dom";

const MostrarReservas = () => {
    const [reservas, setReservas] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchReservas()
    }, [])


    const fetchReservas = async () => {
        try {
            const listado = await obtenerReservas()
            setReservas(listado)

        } catch (error) {
            setError(error)
        }
    }


    const handleClickEliminar = () => {
        try {
            eliminarReserva = eliminar(id_Reserva)
        } catch (error) {

        }

    }


    return (


        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">numero de reserva</th>
                        <th scope="col">Nombre del cliente</th>
                        <th scope="col">numero de mesa</th>
                        <th scope="col">fecha</th>
                        <th scope="col">numero de personas</th>
                        <th scope="col">Estados</th>
                        <th scope="col">comentarios</th>
                        <th scope="col">Modificar</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {reservas.map((c) => (
                        <tr key={c.id_Reserva}>
                            <th>{c.id_Reserva}</th>
                            <td>{c.Nombre}</td>
                            <td>{c.id_Mesa}</td>
                            <td>{c.FechaReserva}</td>
                            <td>{c.NumeroPersonas}</td>
                            <td>{c.Estado}</td>
                            <td>{c.Comentarios}</td>
                            <td><button className="btn">Modificar</button></td>
                            <td><button onClick={handleClickEliminar} className="btn">Eliminar</button></td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default MostrarReservas