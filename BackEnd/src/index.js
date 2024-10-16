import express from "express";
import cors from 'cors';
import router from "./Routes/RestauranteRoutes.js";
import { sql, getConnection } from "./Config/Connection.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);


app.listen(process.env.PORT, () => {
    getConnection();
    console.log(`Conectado en el puerto: ${process.env.PORT}`);
});
