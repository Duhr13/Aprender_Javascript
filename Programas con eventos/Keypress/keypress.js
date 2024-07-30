let input = document.getElementById("miInput");

function informacion(event) {
    console.log(event.key);
}

input.addEventListener("keypress", informacion);