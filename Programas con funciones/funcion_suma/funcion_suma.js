'sctrict mode'

/*
   Voy a crear una función suma que realice sumas de números diez veces consecutivas
*/

function suma(num1, num2){
    sumatorio = num1 + num2;
    return sumatorio;
}

let numero1 = 0;
let numero2 = 0;

for (let i = 1; i <= 10; i++){

    numero1 = parseInt(prompt("Introcude el primer número a sumar", 0));
    numero2 = parseInt(prompt("Introduce el segundo número a sumar", 0));

    while (isNaN(numero1) || isNaN(numero2)){
        numero1 = parseInt(prompt("Introcude el primer número a sumar", 0));
        numero2 = parseInt(prompt("Introduce el segundo número a sumar", 0));
    }

    document.write("Esta es la suma número ", i, " con resultado: ", suma(numero1, numero2), "<br>");
}