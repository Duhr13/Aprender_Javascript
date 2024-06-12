
// Tercera versión de la aplicación. Uso de funciones para generar automatizaciones.
// En esta versión, al automatizar la creación de tiendas -modificando un parámetro en onload del body- se rompen los cálculos
// El arreglo de los cálculos se realizará en la V4 del programa

function crearTienda(contenedorID, valorMin, cantidadTiendas){
    // Encontrar contenedor por su ID
    let elementoContenedor = document.getElementById(contenedorID);

    // Bucle para generar tantas tiendas como necesitemos

    for (let numeroTiendas = 1; numeroTiendas <= cantidadTiendas; numeroTiendas++) {

        // Crear el texto de label para poder llamar a la función

        let textoEtiqueta = "Tienda " + numeroTiendas;

        // Crear tiendas con la función crearElementos

        let parrafoTienda = crearElementos(textoEtiqueta, valorMin);

        // Agregar el párrafo al contenedor

        elementoContenedor.appendChild(parrafoTienda);


    }
}

function crearElementos(idlabel, min){

    // Creamos el nuevo párrafo
    let nuevoParrafo = document.createElement("p");

    // Creamos la nueva etiqueta label que servirá para asociar los for y los id
    let nuevoLabel = document.createElement("label");
    nuevoLabel.innerText = idlabel + ": "

    // Creamos los atributos de la etiqueta label para conectarlos con input
    nuevoLabel.setAttribute("for", idlabel);
    
    // Creamos la nueva etiqueta input con sus atributos

    let nuevoInput = document.createElement("input");
    nuevoInput.setAttribute("id", idlabel);
    nuevoInput.setAttribute("type", "number");
    nuevoInput.setAttribute("min", min);
    nuevoInput.setAttribute("value", 0);

    // Agregamos label e input al párrafo

    nuevoParrafo.appendChild(nuevoLabel);
    nuevoParrafo.appendChild(nuevoInput);

    // Retornamos el párrafo completamente construido

    return nuevoParrafo;
}



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

    let valores = [];

    valores[0] = asociarDatos("tienda1");
    valores[1] = asociarDatos("tienda2");
    valores[2] = asociarDatos("tienda3");
    valores[3] = asociarDatos("tienda4");
    valores[4] = asociarDatos("tienda5");
    valores[5] = asociarDatos("tienda6");

    // Esta parte es la suma de los valores de las tiendas y la manipulación del DOM para mostrar el resultado en la pantalla.

    let totalVentas = suma(valores);

    let mensajeVentas = "El total de las ventas de las 6 tiendas ha sido: " + totalVentas + "€.";

    let elementoSalida = document.getElementById("mensajeCalculo");

    elementoSalida.textContent = mensajeVentas;

    // Esta parte es el cálculo del valor máximo de la venta de las tiendas.

    let valorMaximo = maximo(valores);

    let maximoMensaje = "El valor máximo obtenido por una tienda es: " + valorMaximo + " €.";

    let maximoMsg = document.getElementById("valorMaximo");

    maximoMsg.textContent = maximoMensaje;

    // Esta parte es el cálculo del valor mínimo de la venta de las tiendas.

    let valorMinimo = minimo(valores);

    let minimoMensaje = "El valor minimo obtenido por una tienda es: " + valorMinimo + " €.";

    let minimoMsg = document.getElementById("valorMinimo");

    minimoMsg.textContent = minimoMensaje;
    
}

function suma(valores) {

    let suma = 0;

    for (let indice of valores) {
        suma += indice;
    }
    return suma;
}

function maximo(valores) {
    let valormax = 0;
    for (let index of valores) {
        if (index > valormax) {
            valormax = index;
        }
    }
    return valormax;
}

function minimo(valores) {
    let valormin = maximo(valores);
    for (let indexmin of valores) {
        if (indexmin < valormin) {
            valormin = indexmin;
        }
    }
    return valormin;
}