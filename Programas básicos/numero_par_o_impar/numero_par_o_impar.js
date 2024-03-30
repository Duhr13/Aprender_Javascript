'strict mode'

let num = (Number(prompt("Introduce un número", 0)));

while (isNaN(num)){
    num = (Number(prompt("Introduce un número", 0)));
}

if (num % 2 == 0){
    document.write(num, " es un número par");
}
else{
    document.write(num, " es un número impar");
}