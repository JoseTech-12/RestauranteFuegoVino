import { useState, useEffect } from "react"
import { obtenerMesas } from "../services/ReservaServices"



const MostrarMesas = () => {
    const [mesas, setMesas] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchMesas();
    }, [])

    const fetchMesas = async () => {
        try {
            const listado = await obtenerMesas()
            setMesas(listado)
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
                        <th scope="col">Numero de mesa</th>
                        <th scope="col">Capacidad</th>
                        <th scope="col">Ubicacion</th>

                    </tr>
                </thead>
                <tbody>

                    {mesas.map((m) => (
                        <tr key={m.id_mesa}>
                            <th>{m.id_mesa}</th>
                            <th>{m.NumeroMesa}</th>
                            <th>{m.Capacidad}</th>
                            <th>{m.Ubicacion}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default MostrarMesas