// Este es el archivo que voy a conectar con datos.json

let titulo;
let director;
let lanzamiento;
let duracion;
let actores;
let premioOscar;

function obtenerDatos() {
    let datosJson;
    let xhr = XMLHttpRequest();
    xhr.open('GET', 'datos.json', true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        if (xhr.status == 200) { // esto no lo entiendo
            datosJson = xhr.response;
            titulo = datosJson.titulo;
            director = datosJson.director;
            lanzamiento = datosJson.lanzamiento;
            duracion = datosJson.duracion;
            actores = datosJson.actores;
            premioOscar = datosJson.premioOscar;
        }
    }
    xhr.send();
}