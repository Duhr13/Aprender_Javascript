'strict mode'

let num1 = Number(prompt("Introduce el primer número", 0));
let num2 = Number(prompt("Introduce el segundo número", 0));

while (isNaN(num1) || isNaN(num2)){
    num1 = Number(prompt("Introduce el primer número", 0));
    num2 = Number(prompt("Introduce el segundo número", 0));
}

document.write("La suma de ", num1, " + ", num2, " es: ", (num1 + num2), "<br>");
document.write("La resta de ", num1, " - ", num2, " es: ", (num1 - num2), "<br>");
document.write("La multiplicación de ", num1, " x ", num2, " es: ", (num1 * num2), "<br>");
document.write("La división de ", num1, " / ", num2, " es: ", (num1 / num2), "<br>");
document.write("El resto de dividir ", num1, " / ", num2, " es: ", (num1 % num2), "<br>");