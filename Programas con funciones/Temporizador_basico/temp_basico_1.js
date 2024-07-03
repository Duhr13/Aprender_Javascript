function mensaje(){
    setTimeout(mostrarMensaje, 1000 * 5);
    setTimeout(mostrarMensajeDos, 1000 * 15);
}

function mostrarMensaje() {
    alert("Se acabó el primer tiempo");
}

function mostrarMensajeDos() {
    alert("Se acabó el segundo tiempo");
}