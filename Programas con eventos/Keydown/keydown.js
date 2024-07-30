let input = document.getElementById("miInput");

function validar(event) {
    if (event.key == 32) {
        event.preventDefault();
    }
    else {
        console.log(event.key);
    }
}

input.addEventListener('keydown', validar);