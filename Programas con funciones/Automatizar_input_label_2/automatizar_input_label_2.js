function repetirContenido(veces){
    document.getElementById("contenido").innerText = ''; // Limpio previamente el contenido del div por si genero elementos múltiples veces, para que no se dupliquen.
    for(let num = 1; num <= veces; num++){
        generarContenido(num);
    }
}

function generarContenido(numero){
    let content = document.getElementById("contenido"); // Atrapo el nodo div con id "contenido" en la variable content.

    // Generar el párrafo
    let parrafo = document.createElement("p");

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

    parrafo.appendChild(label);
    parrafo.appendChild(input);
    
    content.appendChild(parrafo);

    //retornamos el contenido completo para que se vuelque en el nodo div del DOM con el que estamos trabajando.
    return content;
}

function calcular(){
    let suma = 0;
    let spanSuma = document.getElementById("suma"); // Meto en un valor el nodo del DOM donde quiero mostrar el resultado, que es el span con ID llamado suma.
    let contenidoGenerado = document.getElementById("contenido"); // Capturo de nuevo el contenedor contenido, pero ya con los inputs y labels generados.
    for (indice of contenidoGenerado.children) { // Me paseo por los hijos del div contenido, que son los párrafos
        let valor = indice.children[1].value; // Capturo en una variable el hijo [1] de cada párrafo, que son los inputs, cuyos valores quiero capturar.
        suma = suma + Number(valor); // necesito transformar valor en numero, porque si no me lo trata como un string.
    }
    spanSuma.textContent = suma;
}