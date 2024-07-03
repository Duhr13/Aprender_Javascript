function mostrarFechaHora(){
    let mostrarHora = new Date();
    let horas = String(mostrarHora.getHours()).padStart(2, '0'); // Con padStart hacemos que cuando los segundos sean menores de 10, en lugar de 1, 2, 3... salgan 01, 02, 03...
    let minutos = String(mostrarHora.getMinutes()).padStart(2, '0'); // Además, padStart(2, 0) significa que son dos cifras y que a falta de una se coloca un cero a la izquierda.
    let segundos = String(mostrarHora.getSeconds()).padStart(2, '0');
    let reloj = horas + ':' + minutos + ':' + segundos;

    let fechaActual = new Date();
    let opcionesFecha = {
        day: 'numeric',
        month: 'numeric', // si hubiera usado "long" se hubiera mostrado el mes en letra.
        year: 'numeric'
    }

    alert('La fecha actual es: ' + fechaActual.toLocaleDateString('es-Es', opcionesFecha) + ' y la hora: ' + reloj);
}
