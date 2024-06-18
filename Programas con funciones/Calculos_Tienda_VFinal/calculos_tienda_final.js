/* Versión final de la aplicación. En ella voy a tratar de reconstruirla de cero para ver mis puntos débiles.
    También trataré de mejorarla y no hacerla como una simple copia del curso */

function numTiendas() {

    let contenedorID = document.getElementById("contenedorID");
    contenedorID.innerHTML = "";                                // Con esto limpiamos las tiendas previas. Dejamos el contenedor vacío.

    let numTiendas = Number(document.getElementById("numerotiendas").value);  // Extraemos el número del input del número de tiendas 
    
    if (numTiendas < 0 || isNaN(numTiendas)) {                                // Este if es un controlador de errores
        alert("Número de tiendas introducido no válido");
        location.reload();
    }

    return construirTiendas(numTiendas);
}

function crearParrafoTienda(numIdTienda) { // Aquí le pasaré uno a uno un parámetro desde otra función (numeros del 1 al X) tantas veces como tiendas haya

    let parrafo = document.createElement("p");  // Creo el elemento párrafo que será el padre de label e input y que, a su vez, será hijo del div contenedorTiendas
    let label = document.createElement("label"); // Creo el elemento label que será el primer hijo (Child[0]) del párrafo
    let input = document.createElement("input"); // Creo el elemento input

    label.setAttribute("for", "tienda " + numIdTienda); // Atributos del Label
    label.innerText = "Tienda " + numIdTienda;

    input.setAttribute("id", "tienda " + numIdTienda); // Atributos del input
    input.setAttribute("type", "number");
    input.setAttribute("value", 0);
    input.setAttribute("min", 0);

    parrafo.appendChild(label); // Añado como hijos al label y al input construidos
    parrafo.appendChild(input);

    return parrafo; // Esta función devuelve el párrafo
}

function construirTiendas(numTiendas) {

    let contenedorTiendas = document.getElementById("contenedorID");


    for (let i = 1; i <= numTiendas; i++) {
        let miParrafo = crearParrafoTienda(i); // Invoco a la función y le paso como parámetro el número de la tienda
        contenedorTiendas.appendChild(miParrafo); // Añadimos al "contenedorID" el párrafo devuelto por la función en cada iteración
    }

}

function calcular() {

    let valores = [];
    let contadorTiendas = 0;
    let idTiendas = document.getElementById("contenedorID");

    for (index of idTiendas.children) { // idTiendas.children se ubica en el párrafo (hijo del div)
        let valorVenta = numTiendas(index.children[1]); // index.children[1] se ubica en el segundo hijo del párrafo. index.children[0] sería la etiqueta label.
        valores[contadorTiendas] = valorVenta;
        contadorTiendas++;
    }

    console.log(valores);


}

function suma(valores) {

    let suma = 0;

    for (let indice of valores) {
        suma += indice;
    }
    return suma;
}

function maximo(valores) {
    let valormax = 0;
    for (let index of valores) {
        if (index > valormax) {
            valormax = index;
        }
    }
    return valormax;
}

function minimo(valores) {
    let valormin = maximo(valores);
    for (let indexmin of valores) {
        if (indexmin < valormin) {
            valormin = indexmin;
        }
    }
    return valormin;
}