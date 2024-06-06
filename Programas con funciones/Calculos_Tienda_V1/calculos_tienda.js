
// Primera versión de la aplicación. Esqueleto y funcionalidad básica.

function asociarDatos(valor) {
    let miValor = document.getElementById(valor);
    let miNumero = Number(miValor.value);

    if (miNumero < 0) {
        alert("El valor introducido en alguna tienda no es correcto. Verifique que no sea un número negativo o un valor no numérico");
        location.reload();
    }

    return miNumero;
}

function calcular() {
    let valor1 = asociarDatos("tienda1");
    let valor2 = asociarDatos("tienda2");
    let valor3 = asociarDatos("tienda3");
    let valor4 = asociarDatos("tienda4");
    let valor5 = asociarDatos("tienda5");
    let valor6 = asociarDatos("tienda6");

    let totalVentas = valor1 + valor2 + valor3 + valor4 + valor5 + valor6;

    let mensajeVentas = "El total de las ventas de las 6 tiendas ha sido: " + totalVentas + "€.";

    let elementoSalida = document.getElementById("mensajeCalculo");

    elementoSalida.textContent = mensajeVentas;
    
}