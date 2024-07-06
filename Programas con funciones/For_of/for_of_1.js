let array = new Array;


function crearArray() {
    let valor = document.getElementById("valor").value;
    array.push(valor);                                      // Añado el valor del campo input al array
    document.getElementById("valor").value = '';            // Limpio el campo input
}

function mostrarArray() {
    document.getElementById("iteraciones").innerText = ''; // Con esto limpio el listado y evito que se me duplique por si amplío el array y quiero luego volver a mostrarlo.
    let listado = document.getElementById("iteraciones"); // La variable del listado no la puedo crear de manera global porque si no no funciona. Debe ser local y antes del bucle.
    for (let index of array){
        let lista = document.createElement("li");
        lista.innerText = index;
        listado.appendChild(lista);
    }
}