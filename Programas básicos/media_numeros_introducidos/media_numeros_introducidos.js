'strict mode'

/*
 Utilizando un bucle, mostrar la suma y la media de los números introducidos
 hasta introducir un número negativo y ahí mostrar el resultado
*/

let sumar = 0;
let contador = 0;

let num = sumar;

while (num >= 0 || isNaN(num)){
    num = Number(prompt("Introduce un número", 0));
    sumar += num;
    contador++;
    console.log(sumar);
    console.log(num);
    console.log(contador);
}

console.log("La media de los números introducidos es: " + (sumar/contador));