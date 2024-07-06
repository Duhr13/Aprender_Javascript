function repetirContenido(veces){
    document.getElementById("contenido").innerText = ''; // Limpio previamente el contenido del div por si genero elementos múltiples veces, para que no se dupliquen.
    for(let num = 1; num <= veces; num++){
        generarContenido(num);
    }
    document.getElementById("veces").value = 0; // Reseteo el valor del input a 0.
}

function generarContenido(numero){
    let content = document.getElementById("contenido"); // Atrapo el nodo div con id "contenido" en la variable content.

    // Generar el label completo
    let label = document.createElement("label");
    label.setAttribute("for", "txtInput" + numero);
    label.innerText = "Label " + numero;

    // Generar el input completo
    let input = document.createElement("input");
    input.setAttribute("id", "txtInput" + numero);
    input.setAttribute("type", "number");
    input.setAttribute("value", 0);

    // Añadimos tanto el input como el label al nodo div como hijos.
    content.appendChild(label);
    content.appendChild(input);

    //retornamos el contenido completo para que se vuelque en el nodo div del DOM con el que estamos trabajando.
    return content;
}