function generarTabla() {

    //Primero capturo el numero del que quiero generar su tabla

    let tabNum = Number(document.getElementById("num").value);

    //Obtengo el ID donde quiero generar luego la tabla y lo asocio a una variable

    let elementoTablaMultiplicar = document.getElementById("listado");

    //Limpiamos el listado previo (si existiese, para no generar listas múltiples)

    elementoTablaMultiplicar.innerHTML = "";

    //Genero, con un bucle, la tabla de multiplicar

    for (let i = 0; i <= 10; i++) {

        // Calculamos el resultado

        let numResultado = tabNum * i;

        // Armamos el String que sacaremos por pantalla

        let textoResultado = tabNum + " multiplicado por " + i + " es igual a: " + numResultado;

        // Creamos el elemento de la lista no numerada

        let itemLista = document.createElement("li");
        itemLista.innerHTML = textoResultado;
        elementoTablaMultiplicar.appendChild(itemLista);
    }
}
