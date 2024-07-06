let miArray = ['A', 'A', 'B', 'A', 'B'];

function testForOf() {
    for (let letra of miArray) {
        console.log(letra);
        if (letra == 'B') {
            console.log('Encontrado el primer B');
            break;
        }
        else {
            continue;
        }
    }
}