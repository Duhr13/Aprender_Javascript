'use strict';

 /* Con estas dos funciones consigo que se muestren la fecha y la hora actual en la página web.
    Probablemente me pueda ser útil para los campos fecha de las bases de datos. */

let fechaHora = () => {
    let fecha = new Date();
    let dia = String(fecha.getDate()).padStart(2, '0');
    let hora = String(fecha.getHours()).padStart(2, '0');
    let minuto = String(fecha.getMinutes()).padStart(2, '0');
    let segundo = String(fecha.getSeconds()).padStart(2, '0');
    let mes = String(fecha.getMonth() + 1).padStart(2, '0');
    let año = fecha.getFullYear();
    let cadena = `${dia}/${mes}/${año} || ${hora}:${minuto}:${segundo}`;  

    let fechayHora = document.getElementById('fechaHora');
    fechayHora.innerText = cadena;
}

let mostrarFechaHora = () => {
    setInterval(fechaHora, 1000);
}