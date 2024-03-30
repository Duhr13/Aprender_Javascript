'strict mode'

/*
    Este programa compara dos números entre sí y saca por consola si son mayores, menores o iguales.
    Además, se le añade un bucle para evitar errores, evitando números negativos y usando la función Is Not a Number (IsNan), que se repita hasta que 
    se introduzca un número entero.
    Se añade "parseInt" porque todo lo que entra por prompt se convierte automáticamente en un string. Y así se convierte en número entero.
*/

let num1 = parseInt(prompt("Introduce el primer número", 0));
let num2 = parseInt(prompt("introduce ahora el segundo número a comparar", 0));

while (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2)){
    num1 = parseInt(prompt("Introduce el primer número", 0));
    num2 = parseInt(prompt("introduce ahora el segundo número a comparar", 0));
}

if (num1 > num2){
    console.log(num1, " es mayor que ", num2);
}
else if (num2 > num1){
    console.log(num2, " es mayor que ", num1);
}
else{
    console.log("Los dos números son iguales");
}