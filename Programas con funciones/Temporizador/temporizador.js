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