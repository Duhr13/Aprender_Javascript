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

/* Voy a proceder a capturar el panel y meterlo en matrices 
    Para ello construiré una función "cosechadora" y luego la llamaré. */

let construirArraysPanel = (prefijo, cantidad) => {
    let array = new Array();
    for (let i = 1; i <= cantidad; i++) {
        array.push(document.querySelector(`#${prefijo}${i}`).textContent);
    }
    return array;
}

let D = construirArraysPanel('D', 11);
let C = construirArraysPanel('C', 11);
let E = construirArraysPanel('E', 11);
let c = construirArraysPanel('cc', 11);
let e = construirArraysPanel('ee', 11);
let f = construirArraysPanel('f', 11);
let Cw = construirArraysPanel('Cw', 11);
let V = construirArraysPanel('V', 11);
let K = construirArraysPanel('K', 11);
let k = construirArraysPanel('kk', 11);
let Kpa = construirArraysPanel('Kpa', 11);
let Kpb = construirArraysPanel('Kpb', 11);
let Fya = construirArraysPanel('Fya', 11);
let Fyb = construirArraysPanel('Fyb', 11);
let Jka = construirArraysPanel('Jka', 11);
let Jkb = construirArraysPanel('Jkb', 11);
let Xga = construirArraysPanel('Xga', 11);
let Lea = construirArraysPanel('Lea', 11);
let Leb = construirArraysPanel('Leb', 11);
let S = construirArraysPanel('S', 11);
let s = construirArraysPanel('ss', 11);
let M = construirArraysPanel('M', 11);
let N = construirArraysPanel('N', 11);
let P1 = construirArraysPanel('P1', 11);
let Lua = construirArraysPanel('Lua', 11);
let Lub = construirArraysPanel('Lub', 11);

/* A continuación la función de capturar el resultado */

function capturarResultados() {

    let res1 = Number(document.getElementById("resul1").value);
    let res2 = Number(document.getElementById("resul2").value);
    let res3 = Number(document.getElementById("resul3").value);
    let res4 = Number(document.getElementById("resul4").value);
    let res5 = Number(document.getElementById("resul5").value);
    let res6 = Number(document.getElementById("resul6").value);
    let res7 = Number(document.getElementById("resul7").value);
    let res8 = Number(document.getElementById("resul8").value);
    let res9 = Number(document.getElementById("resul9").value);
    let res10 = Number(document.getElementById("resul10").value);
    let res11 = Number(document.getElementById("resul11").value);

    let resulpanelC = [res1, res2, res3, res4, res5, res6, res7, res8, res9, res10, res11];
    return resulpanelC;
}

/* Función resolver. Detrás de ella generaré todas las funciones necesarias para resolver el panel. */

function resolverC(){

    // Primero limpiamos todo

    document.getElementById("informeD").textContent = '';
    document.getElementById("informeC").textContent = '';
    document.getElementById("informec").textContent = '';
    document.getElementById("informeE").textContent = '';
    document.getElementById("informee").textContent = '';
    document.getElementById("informef").textContent = '';
    document.getElementById("informecw").textContent = '';
    document.getElementById("informev").textContent = '';
    document.getElementById("informeK").textContent = '';
    document.getElementById("informek").textContent = '';
    document.getElementById("informekpa").textContent = '';
    document.getElementById("informekpb").textContent = '';
    document.getElementById("informeFya").textContent = '';
    document.getElementById("informeFyb").textContent = '';
    document.getElementById("informeJka").textContent = '';
    document.getElementById("informeJkb").textContent = '';
    document.getElementById("informeXga").textContent = '';
    document.getElementById("informeLea").textContent = '';
    document.getElementById("informeLeb").textContent = '';
    document.getElementById("informeS").textContent = '';
    document.getElementById("informes").textContent = '';
    document.getElementById("informeM").textContent = '';
    document.getElementById("informeN").textContent = '';
    document.getElementById("informeP1").textContent = '';
    document.getElementById("informeLua"). textContent = '';
    document.getElementById("informeLub").textContent = '';
    
    let resultadoPanelC = capturarResultados();
}

