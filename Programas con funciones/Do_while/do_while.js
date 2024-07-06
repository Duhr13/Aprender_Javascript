function testLoop() {
    let vueltas = document.getElementById("numero").value;
    let contador = 0;
    let listado = document.getElementById("iteraciones");
    do {
        contador++;
        let lista = document.createElement("li");   // IMPORTANTE. El createElement debe ir dentro del bucle para generarse las veces que se necesite.
        lista.innerHTML = 'Iteración número ' + contador;
        listado.appendChild(lista);
    } while(contador < vueltas);
}