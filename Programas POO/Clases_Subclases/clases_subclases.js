class Animal {
    constructor (nombre, edad, peso) {
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
    }

    informacion(){
        return `${this.nombre} - ${this.edad} años - ${this.peso} gramos`;
    }
}

class Perro extends Animal{
    constructor (nombre, edad, peso, raza) {
        super(nombre, edad, peso);
        this.raza = raza;
    }

    informacion(){
        return `${this.nombre} - ${this.edad} años - ${this.peso} gramos - ${this.raza}`;
    }
}

class Gato extends Animal{
    constructor (nombre, edad, peso, color) {
        super(nombre, edad, peso);
        this.color = color;
    }

    informacion(){
        return `${this.nombre} - ${this.edad} años - ${this.peso} gramos - ${this.color}`;
    }
}

class Conejo extends Animal{
    constructor (nombre, edad, peso, tamanio) {
        super(nombre, edad, peso);
        this.tamanio = tamanio;
    }

    informacion(){
        return `${this.nombre} - ${this.edad} años - ${this.peso} gramos - ${this.tamanio}`;
    }
}

let listadoanimales = new Array;
let contadorID = 0;

function guardarInformacion() {
    let tipo = document.getElementById("tipoanimal").value;

    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let peso = document.getElementById("peso").value;
    let raza = document.getElementById("raza").value;
    let color = document.getElementById("color").value;
    let tamanio = document.getElementById("tamanio").value;

    if (tipo === "perro") {
        listadoanimales[contadorID] = new Perro(nombre, edad, peso, raza);
    }
    else if (tipo === "gato") {
        listadoanimales[contadorID] = new Gato(nombre, edad, peso, color);
    }
    else if (tipo === "conejo") {
        listadoanimales[contadorID] = new Conejo(nombre, edad, peso, tamanio);
    }
    contadorID++;

    limpiarformulario();
}

function limpiarformulario() {
    document.getElementById("nombre").value = '';
    document.getElementById("edad").value = 0;
    document.getElementById("peso").value = 0;
    document.getElementById("raza").value = '';
    document.getElementById("color").value = '';
}

function mostrarInformacion() {

    let listado = new Array;
    let listadofinal = document.getElementById("lista");

    console.log(listadoanimales);

    // Uso un for in porque con for of no puedo invocar .constructor.name
    for (index in listadoanimales) {    
        console.log(index);    
        if (listadoanimales[index].constructor.name === 'Perro'){
            //No puedo usar index.nombre porque no es un for of, y al verme obligado a usar un for in la única forma de llamar a las propiedades del objeto es llamarlo en forma de array
            let lista = document.createElement("li");
            lista.innerText = `Tipo de animal: ${listadoanimales[index].constructor.name} - Nombre: ${listadoanimales[index].nombre} - Edad: ${listadoanimales[index].edad} - Peso: ${listadoanimales[index].peso} - Raza: ${listadoanimales[index].raza}`;
            listadofinal.appendChild(lista);
        }
        else if(listadoanimales[index].constructor.name === 'Gato') {
            let lista = document.createElement("li");
            lista.innerText = `Tipo de animal: ${listadoanimales[index].constructor.name} - Nombre: ${listadoanimales[index].nombre} - Edad: ${listadoanimales[index].edad} - Peso: ${listadoanimales[index].peso} - Color: ${listadoanimales[index].color}`;
            listadofinal.appendChild(lista);
        }
        else if(listadoanimales[index].constructor.name === 'Conejo') {
            let lista = document.createElement("li");
            lista.innerText = `Tipo de animal: ${listadoanimales[index].constructor.name} - Nombre: ${listadoanimales[index].nombre} - Edad: ${listadoanimales[index].edad} - Peso: ${listadoanimales[index].peso} - Tamaño: ${listadoanimales[index].tamanio}`;
            listadofinal.appendChild(lista);
        }
        listado.push(lista);
    }
}