import { Schema, model } from "mongoose";

//Creamos el esquema
const EsquemaAlumnos = new Schema({
    name: {
        type: String
    },
    apepat: {
        type: String
    }, 
})

//Creamos el modelo
export const ModeloAlumnos = new model("Tabla de ragistro de alumnos",EsquemaAlumnos);
