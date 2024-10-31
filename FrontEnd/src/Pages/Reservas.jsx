import React, { useState } from 'react'
import "../Css/Reservas.css"
import logo from "../assets/logo.png"
import { reservar } from '../services/ReservaServices'
import { useNavigate } from 'react-router-dom';


const Reservas = () => {

    const [id_Cliente, setId_Cliente] = useState(0)
    const [id_Mesa, setId_Mesa] = useState(1)
    // const [FechaReserva, setFechaReserva] = useState('')
    const [NumeroPersonas, setNumeroPersonas] = useState(0)
    //  const [Estado, setEstado] = useState('')
    const [Comentarios, setComentarios] = useState('')
    const [mensaje, setMensaje] = useState('');
    const [fechaFormat, setFechaFormat] = useState('')
    const navigate = useNavigate();




    const handleSubmit = async (e) => {
        e.preventDefault();

        const formatForSQL = (fechaFormat) => {
            if (!fechaFormat) return '';
            return fechaFormat.replace('T', ' ') + ':00';
        };

        const FechaReserva = formatForSQL(fechaFormat)
        const Estado = 'activo'


        const userData = { id_Cliente: parseInt(localStorage.getItem('id'), 10), id_Mesa, FechaReserva, NumeroPersonas: parseInt(NumeroPersonas, 10), Estado, Comentarios }
        console.log(userData)
        try {

            const respose = await reservar(userData)
            setMensaje('reserva realizada correctamente');
            console.log(mensaje)
            navigate("/Usuario")
            alert("Reserva realizada correctamente")

        } catch (error) {
            setMensaje('Error al realizar la reserva: ' + error.message);
            console.error('Error al realizar la reserva:', error);

        }

    }




    return (
        <div>
            <div className="reservas">
                <div className="logo-container">
                    <img src={logo} alt="Logo del restaurante" className="logo" />
                </div>
                <h2>Haz tu Reserva</h2>
                <form onSubmit={handleSubmit} className="form-reserva">

                    <div className="form-group">
                        <label htmlFor="fecha">Fecha de Reserva:</label>
                        <input value={fechaFormat} onChange={(e) => setFechaFormat(e.target.value)} type="datetime-local" id="fecha" name="fecha" />
                    </div>




                    <div className="form-group">
                        <label htmlFor="personas">Número de Personas:</label>
                        <input value={NumeroPersonas} onChange={(e) => setNumeroPersonas(parseInt(e.target.value, 10))} type="number" id="personas" name="personas" min="1" max="15" placeholder="Número de personas" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mesa">Mesa:</label>
                        <select value={id_Mesa} onChange={(e) => setId_Mesa(parseInt(e.target.value, 10))} name="" id="mesa">
                            <option value="1">Mesa #1</option>
                            <option value="2">Mesa #2</option>
                            <option value="3">Mesa #3</option>
                            <option value="4">Mesa #4</option>
                            <option value="5">Mesa #5</option>
                            <option value="6">Mesa #6</option>
                            <option value="7">Mesa #7</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="personas">Comentario:</label>
                        <textarea value={Comentarios} onChange={(e) => setComentarios(e.target.value)} id="comentario" name="comentario" cols="35" rows="5" placeholder="comentario" required />
                    </div>

                    <button type="submit" className="btn-reserva">Enviar Reserva</button>
                </form>

            </div>

        </div>
    )
}


export default Reservas