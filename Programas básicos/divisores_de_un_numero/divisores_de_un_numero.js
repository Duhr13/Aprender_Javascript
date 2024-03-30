'strict mode'

let num = Number(prompt("Introduce el número cuyos divisores quieres conocer", 0));

console.log(num);

while (isNaN(num)){
    num = Number(prompt("Introduce el número cuyos divisores quieres conocer", 0));
}

for (let i = 1; i <= num; i++){
    if (num % i == 0){
        console.log(i, num);
        document.write(i, " es un divisor de ", num, "<br>");
    }
}