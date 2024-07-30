let boton = document.getElementById("miBoton");

function cancelar(event) {
    console.log(event.preventDefault());
}

boton.addEventListener("click", cancelar);