'use strict'

// Primera parte del programa (H1)

function cambiarTexto(){
 setTimeout(cambiar, 1000 * 5);
}

function cambiar(){
    let parrafoUno = document.querySelector('#item1');
    parrafoUno.innerHTML = 'Párrafo Uno cambiado';
    let parrafoDos = document.querySelector('#item2');
    parrafoDos.innerHTML = 'Párrafo Dos cambiado';
    parrafoUno.style.color = 'black';
    parrafoUno.style.backgroundColor = 'white';
    parrafoDos.style.color = 'black';
    parrafoDos.style.backgroundColor = 'white';
}

// Segunda parte del programa (H2)

let numeroMinutos = document.querySelector('#number');

function cambiarTextoDos(){
    setTimeout(cambiarDos, 1000 * parseInt(numeroMinutos.value));
}

function cambiarDos(){
    let parrafoTres = document.querySelector('#item3');
    parrafoTres.innerHTML='Párrafo Tres cambiado';
    parrafoTres.style.color='green';
}

// Tercera parte del programa (Hora con minutos y segundos)

function hora(){
    setInterval(mostrarHora, 1000);
}

function mostrarHora(){
    let mostrarHora = new Date();
    let horas = String(mostrarHora.getHours()).padStart(2, '0'); // Con padStart hacemos que cuando los segundos sean menores de 10, en lugar de 1, 2, 3... salgan 01, 02, 03...
    let minutos = String(mostrarHora.getMinutes()).padStart(2, '0'); // Además, padStart(2, 0) significa que son dos cifras y que a falta de una se coloca un cero a la izquierda.
    let segundos = String(mostrarHora.getSeconds()).padStart(2, '0');
    let reloj = horas + ':' + minutos + ':' + segundos;
    let mostrarReloj = document.querySelector('#item4');
    mostrarReloj.textContent = reloj;
}