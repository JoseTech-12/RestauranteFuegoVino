import { getAllR, login, registrar, reservar } from "../Controller/RestautanteController.js";
import express from "express";


const router = express.Router();

router.get('/MostrarReservas', getAllR)
router.post('/registrar', registrar)
router.post('/login', login)
router.post('/reservar', reservar)


export default router