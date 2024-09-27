import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";

//Agregamos el .js
import { test } from "./backend/controllers/alumno.controller.js";

//Trae la configuracion
dotenv.config()

//Conecta a la db
mongoose.connect(process.env.urlBase)
    .then(() => {
        console.log("Jalo")
    })
    .catch((error) => console.log("No jalo", error))

//Define servidor
const app = express()

//Agrega cors
app.use(cors())

//Lanzamos el servidor
app.listen(4000, 
    () =>
         console.log("Servidor lanzado")
)

test()
