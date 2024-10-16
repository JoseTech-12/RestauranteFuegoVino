import { sql } from "../Config/Connection.js";
import bcrypt from 'bcryptjs';


const getAllReservas = async () => {
    try {
        const reservas = await sql.query('SELECT * FROM Reserva');
        return reservas.recordset;
    } catch (error) {
        throw error;
    }
}

const registrarUsuario = async (nombre, telefono, email, contraseña) => {

    try {
        const hashedPassword = await bcrypt.hash(contraseña, 10)
        const conection = await sql.connect()
        await conection.request()
            .input('nombre', sql.VarChar, nombre)
            .input('telefono', sql.VarChar, telefono)
            .input('email', sql.VarChar, email)
            .input('contraseña', sql.VarChar, hashedPassword)
            .query('INSERT INTO Usuario (nombre, telefono,email,contraseña) VALUES (@nombre, @telefono, @email, @contraseña)');
        return 'Usuario registrado exitosamente';
    } catch (error) {
        throw error
    }

}
const obtenerUsuario = async (email) => {
    try {
        const connection = await sql.connect();
        const result = await connection.request()
            .input('email', sql.VarChar, email)
            .query('SELECT * FROM Usuario WHERE email = @email');
        return result.recordset[0];
    } catch (error) {
        throw error;
    }
};



export { getAllReservas, registrarUsuario, obtenerUsuario }
