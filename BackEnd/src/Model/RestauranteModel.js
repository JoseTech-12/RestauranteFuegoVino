
import { sql } from "../Config/Connection.js";
import bcrypt from 'bcryptjs';


const getAllReservas = async () => {
    try {
        const reservas = await sql.query('select r.id_Reserva, u.Nombre , r.id_Mesa, r.FechaReserva, r.NumeroPersonas, r.Estado, r.Comentarios from Reserva as r inner join Usuario u on r.id_Cliente = u.id_Cliente');
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


const realizarReserva = async (id_Cliente, id_Mesa, FechaReserva, NumeroPersonas, Estado, Comentarios) => {

    try {
        const conection = await sql.connect();
        await conection.request()
            .input('id_Cliente', sql.Int, id_Cliente)
            .input('id_Mesa', sql.Int, id_Mesa)
            .input('FechaReserva', sql.DateTime, FechaReserva)
            .input('NumeroPersonas', sql.Int, NumeroPersonas)
            .input('Estado', sql.VarChar, Estado)
            .input('Comentarios', sql.VarChar, Comentarios)
            .query('insert into Reserva (id_Cliente, id_Mesa, FechaReserva, NumeroPersonas, Estado, Comentarios) values(@id_Cliente, @id_Mesa,@FechaReserva,@NumeroPersonas,@Estado,@Comentarios)')
        return 'reserva realizada correctamente'
    } catch (error) {
        throw error
    }

}



export { getAllReservas, registrarUsuario, obtenerUsuario, realizarReserva }
