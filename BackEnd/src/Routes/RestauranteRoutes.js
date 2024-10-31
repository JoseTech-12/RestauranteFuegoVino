import { getAllR, login, registrar, reservar, getAllUsuario, getMesas, deleteReservaa } from "../Controller/RestautanteController.js";
import express from "express";


const router = express.Router();

router.get('/MostrarReservas', getAllR)
router.post('/registrar', registrar)
router.post('/login', login)
router.post('/reservar', reservar)
router.get('/MostrarUsuario', getAllUsuario)
router.get('/mesas', getMesas)
router.delete('/MostrarReservas/:id_Reserva'.deleteReservaa)

export default router