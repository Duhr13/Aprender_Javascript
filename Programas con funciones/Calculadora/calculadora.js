'use strict'

function mostrarResultado(resul) {
    console.log(resul);
    document.querySelector('#resultado').value = resul;
}

function sumar(num1, num2) {
    let resul = Number(num1.value) + Number(num2.value);
    mostrarResultado(resul);
}

function restar(num1, num2) {
    let resul = Number(num1.value) - Number(num2.value);
    mostrarResultado(resul);
}

function multiplicar(num1, num2) {
    let resul = Number(num1.value) * Number(num2.value);
    mostrarResultado(resul);
}

function dividir(num1, num2) {
    let resul = Number(num1.value) / Number(num2.value);
    mostrarResultado(resul);
}

function potencia() {
    let numero1 = document.querySelector('#numero1').value;
    let numero2 = document.querySelector('#numero2').value;
    let resul = Math.pow(+numero1, +numero2);
    mostrarResultado(resul);
}

function raiz() {
    let numero1 = document.querySelector('#numero1').value;
    let numero2 = document.querySelector('#numero2').value;
    let resul = Math.sqrt(+numero1, +numero2);
    mostrarResultado(resul);
}

function absoluto() {
    let numero2 = document.querySelector('#numero2').value;
    let resul = Math.abs(+numero2);
    mostrarResultado(resul);
}

function aleatorio() {
    document.querySelector('#numero1').value = (Math.random() * 100);
    document.querySelector('#numero2').value = (Math.random() * 100);
}

function redondear() {
    let resultado = document.querySelector('#resultado').value;
    mostrarResultado(Math.round(resultado));
}