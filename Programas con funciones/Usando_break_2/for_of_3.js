let miArray = [9, 5, 6, 2, 7];

function testForOf() {
    for (let numero of miArray) {
        if (numero >= 5) {
            console.log(`El número ${numero} es mayor o igual a 5`);
        }
        else {
            continue;
        }
    }
}