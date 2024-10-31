import { getAllReservas, registrarUsuario, obtenerUsuario, realizarReserva, getUsuarios, getAllMesas, deleteReserva } from "../Model/RestauranteModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const getAllR = async (req, res) => {

    const reservas = await getAllReservas();
    res.json(reservas);

}

const getAllUsuario = async (req, res) => {

    const usuarios = await getUsuarios();
    res.json(usuarios);
}

const getMesas = async (req, res) => {
    const mesas = await getAllMesas()
    res.json(mesas);
}
const reservar = async (req, res) => {
    const { id_Cliente, id_Mesa, FechaReserva, NumeroPersonas, Estado, Comentarios } = req.body

    try {
        const response = await realizarReserva(id_Cliente, id_Mesa, FechaReserva, NumeroPersonas, Estado, Comentarios);
        res.status(201).json(response)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const registrar = async (req, res) => {
    const { nombre, telefono, email, contraseña } = req.body;

    try {
        const response = await registrarUsuario(nombre, telefono, email, contraseña);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });

    }
}

const login = async (req, res) => {
    const { email, contraseña } = req.body;

    if (!email || !contraseña) {
        return res.status(400).json({ error: 'Faltan el email o la contraseña' });
    }
    try {
        const user = await obtenerUsuario(email);
        if (!user) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }
        const verificarContraseña = await bcrypt.compare(contraseña, user.Contraseña);
        if (!verificarContraseña) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ id: user.id_Cliente }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({
            token,
            user: {
                id: user.id_Cliente,
                nombre: user.Nombre,
                telefono: user.Telefono,
                email: user.Email
            }
        });
    } catch (error) {

        res.status(400).json({ error: error.message });
    }
};

const deleteReservaa = async (req, res) => {

    const id_Reserva = req.params

    try {
        const deleteReservas = deleteReserva(id_Reserva)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export { getAllR, login, registrar, reservar, getAllUsuario, getMesas, deleteReservaa }