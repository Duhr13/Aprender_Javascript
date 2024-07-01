/*let nombreBanco = document.getElementById("nombre");
let sucursalBanco = document.getElementById("sucursal");
let titularBanco = document.getElementById("titular");
let numeroCuenta = document.getElementByid("nro_cuenta");       No se muy bien el porqué todavía
let monedaUno = document.getElementById("moneda1");             Pero usando variables globales + textContent en las promesas... no funciona.
let monedaDos = document.getElementById("moneda2");             He tenido que capturar el ID del DOM directamente en la function(salida) de la promesa
let saldoUno = document.getElementById("saldo1");
let saldoDos = document.getElementById("saldo2");
let fechaCuenta = document.getElementById("fecha");*/

function cargarResumen() {
    fetch("jugando_con_json.json")
    .then(respuesta => respuesta.json())
    .then(function(salida) {
        document.getElementById("nombre").textContent = salida.banco; // leer nota de arriba
        document.getElementById("sucursal").textContent = salida.sucursal;
        document.getElementById("titular").textContent = salida.titular;
        document.getElementById("nrocuenta").textContent = salida.nrocuenta;
        document.getElementById("moneda1").textContent = salida.saldo[0].moneda; // El 0 apunta al primer array/objeto, y luego se selecciona su propiedad
        document.getElementById("moneda2").textContent = salida.saldo[1].moneda; // El 1 apunta al segundo array/objeto, y luego se selecciona su propiedad
        document.getElementById("saldo1").textContent = salida.saldo[0].saldo;
        document.getElementById("saldo2").textContent = salida.saldo[1].saldo;
        document.getElementById("fecha").textContent = salida.abierto;
    })
    .catch(function(error){
        alert(error);
    })
}