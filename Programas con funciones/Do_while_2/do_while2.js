function tablaMultiplicar() {
    let numero = document.getElementById("numero").value;
    let contador = 0;
    let listado = document.getElementById("iteraciones");
    do {
        contador++;
        let lista = document.createElement("li");   // IMPORTANTE. El createElement debe ir dentro del bucle para generarse las veces que se necesite.
        lista.innerText = numero + ' x ' + contador + ' = ' + (numero * contador);
        listado.appendChild(lista);
    } while(contador < 10);
}