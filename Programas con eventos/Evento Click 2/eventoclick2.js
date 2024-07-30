let boton = document.getElementById("miBoton");

function informacion(event) {
    console.log(event.target.nodeName); // event está en desuso y así me lo indica VSCode, pero no he encontrado sustituto.
}

boton.addEventListener("click", informacion);