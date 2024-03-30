'use strict'

let numero = Number(prompt("Introduce el número cuya tabla de multiplicar deseas conocer", 0))

while (isNaN(numero)){
    numero = Number(prompt("Introduce el número cuya tabla de multiplicar deseas conocer", 0))
}

for (let i = 0; i <= 10; i++){
    console.log(i, " ", numero);
    document.write(numero, " x ", i, " = ", (numero*i), "<br>" );
}