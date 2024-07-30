// Este es el archivo que voy a conectar con datos.json

let titulo;
let director;
let lanzamiento;
let duracion;
let actores;
let premioOscar;

function obtenerDatos() {
    fetch('datos.json')
    .then(respuesta => respuesta.json())
    .then(function(salida) {
        titulo = salida.titulo;
        director = salida.director;
        lanzamiento = salida.lanzamiento;
        duracion = salida.duracion;
        actores = salida.actores;
        premioOscar = salida.premioOscar;
    })
    .catch(function(error){
        alert(error);
    })
}