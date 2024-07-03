// Este programa solo se va a reproducir en consola. Cuando llegue a 5 segundos se detendrá y limpiaremos el intervalo.
let cont = 0;
let interval; // variable global para poder acceder a ella desde las dos funciones. Una para almacenar en ella la función setInterval y que ésta se ejecute. Y otra para detenerla.

function actualizarContador() {
    cont++;
    console.log(cont + " segundos");
    if (cont == 5) {
        clearInterval(interval);
    }
}

function intervalo() {
    interval = setInterval(actualizarContador, 1000 * 1);
}