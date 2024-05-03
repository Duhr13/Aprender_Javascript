'use strict'

/*
    1 - Pedir 6 números por pantalla y que los meta todos en una matriz
    2 - Mostrar la matriz tanto en la página como en la consola
    3 - Ordenar la matriz y mostrarla de nuevo después
    4 - Invertir el orden y mostrar la matriz otra vez
    5 - Mostrar cuantos elementos tiene la matriz/array/arreglo
    6 - Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y en qué posición
*/

// Creo la función de mostrar el array para no replicar tanto código

function mostrarArray(elementos){
    document.write('<ul>')
    for (let index in elementos){
        document.write('<li> El elemento número ', index, ' de la matriz es: ', elementos[index], '</li>');
    }
    document.write('</ul>')
}

let numeros = new Array(6);  // Creamos el array

// Con este bucle resolvemos el primer punto

for (let i = 0; i <= 5; i++){
    numeros[i] = Number(prompt('Introduce un número:', 0));
}

console.log(numeros); // Aquí resolvemos la primera mitad del segundo punto

// Aquí resolvemos la segunda mitad del segundo punto

mostrarArray(numeros);

document.write('<br>');
document.write('<hr>');
document.write('<br>');

// Aquí atacamos el tercer punto ordenando el array y mostrándolo después

document.write('La matriz ordenada es la siguiente: <br><br>');
numeros.sort((a, b) => {return (a-b)}); // Si usara b-a tendría el mismo efecto que reverse() que se usará en el siguiente punto. sort() por sí solo no ordena, reverse() sí
mostrarArray(numeros);

document.write('<br>');
document.write('<hr>');
document.write('<br>');

// Vamos a invertir el orden del array y a presentarlo (cuarto punto)

document.write('La matriz invertida es la siguiente: <br><br>');
numeros.reverse();
mostrarArray(numeros);

document.write('<br>');
document.write('<hr>');
document.write('<br>');

// Vamos a contar elementos del array (quinto punto)

document.write('La matriz tiene ' + numeros.length + ' elementos. <br>');

document.write('<br>');
document.write('<hr>');
document.write('<br>');

// Sexto punto. La búsqueda. Importante comentar que a esta altura del código, la búsqueda la va a realizar sobre la matriz ordenada a la inversa.

let busqueda = Number(prompt('Busca un número', 0));

let encontrado = numeros.findIndex(numero => numero == busqueda);
console.log('El valor encontrado es ', encontrado);

if (encontrado && encontrado != -1){
    document.write('Valor encontrado <br>');
    document.write('La posición de la búsqueda es: ' + encontrado);
} else {
    document.write('Valor no encontrado');
}
