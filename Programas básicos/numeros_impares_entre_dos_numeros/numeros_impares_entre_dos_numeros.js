'strict mode'

/*
    Introducir dos números por pantalla e imprimir los números impares que se encuentran entre ellos
*/

let num1 = Number(prompt("Introduce el primer número", 0));
let num2 = Number(prompt("Introduce el segundo número", 0));

while (isNaN(num1) || isNaN(num2)){
    num1 = Number(prompt("Introduce el primer número", 0));
    num2 = Number(prompt("Introduce el segundo número", 0));
}

for (let i = num1; i <= num2; i++){
    if (i % 2 == 1){
        document.write(i, "<br>");
    }
}

/*
    Otra forma de hacerlo, más corta, es mediante un: 
    while (num1 <= num2) {
        document.write ((num1 % 2 = 1));
        num1++;
    }
*/