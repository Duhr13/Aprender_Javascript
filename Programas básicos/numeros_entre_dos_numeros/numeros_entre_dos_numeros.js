'strict mode'

let num1 = Number(prompt("Introduce el primer número de la lista", 0));
let num2 = Number(prompt("Introduce el segundo número", 0));

while (isNaN(num1) || isNaN(num2)){
    let num1 = Number(prompt("Introduce el primer número de la lista", 0));
    let num2 = Number(prompt("Introduce el segundo número", 0));
}

for (i = num1; i <= num2; i++){
    document.write(i, "<br>");
}