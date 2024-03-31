'use strict'

let matriz = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

let resultado = parseInt(prompt("Introduce un número del 0 al 6 para ver el día de la semana", 0));

while (resultado >= matriz.length || isNaN(resultado)){
    alert("Te dije que eligieras un número del 0 al 6");
    resultado = parseInt(prompt("Introduce un número del 0 al 6 para ver el día de la semana", 0));
}

document.write("El número de la semana elegido es: ", matriz[resultado]);