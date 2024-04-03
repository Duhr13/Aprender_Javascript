'use strict'

let matriz = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

/*
    Forma burda y normal de recorrer una matriz usando un bucle for.
*/

for (let i = 0; i < matriz.length; i++){
    document.write("El elemento número " + i + " de la matriz es: " + matriz[i] + "<br>");
}

document.write('<br>');
document.write('<br>');
document.write('-----------------------------------------------------------------------------------------------------')
document.write('<br>');
document.write('<br>');

/*
    Forma usando un bucle for each
*/

matriz.forEach((element, index) => {
    document.write("El elemento número " + index + " de la matriz es: " + element + "<br>");
});