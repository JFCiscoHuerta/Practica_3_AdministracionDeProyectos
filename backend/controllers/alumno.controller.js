//Debemos agregar el .js, o no encontrara el archivo
import { ModeloAlumnos } from "../models/alumno.model.js";

ModeloAlumnos.create({
    name:"Juanito",
    apepat:"Perez"
})

export const test = () => {
    console.log("Funciona el controlador")
}