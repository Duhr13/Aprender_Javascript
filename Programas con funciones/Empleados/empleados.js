let listado = new Array;

function Empleado(numero, nombre, cargo) {
    this.numero = numero;
    this.nombre = nombre;
    this.cargo = cargo;
}

function generarEmpleado() {
    let numero = document.getElementById("numempleado").value;
    let nombre = document.getElementById("nameempleado").value;
    let cargo = document.getElementById("cargoempleado").value;

    let nuevoempleado = new Empleado(numero, nombre, cargo);

    listado.push(nuevoempleado);

    console.log(listado);

    alert("Empleado introducido correctamente");

    limpiarformulario();
}

function limpiarformulario() {
    document.getElementById("numempleado").value = '';
    document.getElementById("nameempleado").value = '';
    document.getElementById("cargoempleado").value = '';
}

function mostrarEmpleado() {
    let contenedor = document.getElementById("empleados");

    let parrafo = document.createElement("p");
    let listados = document.createElement("ul");
    let lista = document.createElement("li");

    let listaempleados = '';

    for (let empleado of listado) {
        for (let prop in empleado) {
            listaempleados = prop.toUpperCase() + ': ' + empleado[prop];
            lista.innerText = listaempleados;
            listados.appendChild(lista);
            parrafo.appendChild(listados);
            contenedor.appendChild(parrafo);
        }
    }    

    // Esta función no está resuelta realmente. Tengo que ir dándole una vuelta.
}
