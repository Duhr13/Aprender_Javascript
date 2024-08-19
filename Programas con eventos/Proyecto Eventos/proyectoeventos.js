/* 
    Voy a plantear el software de forma modular como hace el tutor en el curso.
*/

// Variables de ámbito global

let opciones = document.getElementById("opciones");     // De aquí extraemos la opción seleccionada con "opciones.value"
let busqueda = document.getElementById("busqueda");     // Input
let miBoton = document.getElementById("miBoton");       // Botón
let contenido = document.getElementById("contenido");   // Listado
let archivo = 'peliculas.json';                         // Valor por defecto del selector

// Escuchadores de eventos

opciones.addEventListener('change', cambiarArchivo);
opciones.addEventListener('cambioModo', mensajesModo);
busqueda.addEventListener('keydown', verificarInput);
miBoton.addEventListener('click', buscar);

// Funciones

function cambiarArchivo() {
    archivo = opciones.value;
    let evento = new CustomEvent('cambioModo');
    opciones.dispatchEvent(evento);
}

function mensajesModo() {
    alert('El archivo de búsqueda ahora es ' + opciones.value);
}

function verificarInput(evento) {
    if ((evento.key < 65 || evento.key > 90) && (evento.key != " ") && (evento.key != "Backspace")) { 
        evento.preventDefault();    // No se imprimen números
    } 
}

function buscar() {
    contenido.innerHTML = '';
    fetch(archivo)
    .then(respuesta => respuesta.json)
    .then(function(salida){
        for(intem of salida.data){
            if(item.nombre.startsWith(busqueda.value.toUpperCase())) {
                let p = document.createElement('p');
                p.id = item.nombre;
                p.innerHTML = item.sinopsis;
                p.style.display = "none";

                let li = document.createElement('li');         //Evento que muestra la sinopsis al pasar el ratón por encima
                li.innerHTML = item.nombre;
                li.addEventListener('mouseover', function() {
                    let p = document.getElementById(item.nombre);
                    p.style.display = 'block';
                })

                li.addEventListener('mouseout', function(){         //Evento que oculta la sinopsis al retirar el ratón
                    let p = document.getElementById(item.nombre);
                    p.style.display = 'none';
                })

                li.appendChild(p);
                contenido.appendChild(li);
            }
        }
    })
    .catch(function(error){
        console.log(error);
    })
}