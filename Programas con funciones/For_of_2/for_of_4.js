let miArray = [[2, 4, 5], [1, 0, 6], [9, 4, 7]];

// Vamos a recorrer el array principal y luego, dentro de cada array secundario, se recorren uno a uno los números.

function dobleArray() {
    for (let array of miArray){
        for (let numero of array){
            document.write(numero + "<br>");
            if (numero === 0) {
                document.write("¡¡¡Aquí he encontrado un número 0!!! <br>");
                continue;
            }
        }
    }
}