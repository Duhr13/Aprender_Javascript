let notas = [1, 10, 7.5, 8, 5];

function generarNotas() {
    let listado = document.getElementById("listanotas");
    for (let i = 0; i < notas.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.innerHTML = notas[i] + "<br>";
        listado.appendChild(itemLista);
    }
}

function notaMedia() {
    let notamedia = document.getElementById("notamedia");
    let sumaNotas = 0;
    for (let index in notas) {
        sumaNotas += notas[index];
        notamedia.textContent = sumaNotas / index;
    }
}

function notaAltaBaja() {
    let notaAlta = document.getElementById("notaAlta");
    let notaBaja = document.getElementById("notaBaja");
    let notaA = 0;
    let notaB = 10;
    for (let indice in notas) {
        console.log(notas[indice]);
        if (notas[indice] > notaA) {
            notaA = notas[indice];
            console.log(notaA);
        }
         // He tenido que dividir los if en dos diferentes porque si uso else if, si el primer if se cumple no se ejecutará el segundo.
        if (notas[indice] < notaB) {
            notaB = notas[indice];
            console.log(notaB);
        }
    }
    notaAlta.textContent = "La nota más alta es: " + notaA;
    notaBaja.textContent = "La nota más baja es: " + notaB;
}