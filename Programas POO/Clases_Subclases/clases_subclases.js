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
}

function mostrarInformacion() {

    let lista = document.createElement("li");
    let listado = new Array;
    let listadofinal = document.getElementById("lista");

    console.log(listadoanimales);

    // Uso un for in porque con for of no puedo invocar .constructor.name
    for (index in listadoanimales) {    
        console.log(index);    
            //console.log(listadoanimales[index].constructor.name);
            //lista.innerText = `${listadoanimales[index].nombre} - ${listadoanimales[index].edad} - ${listadoanimales[index].peso} - ${listadoanimales[index].raza} - ${listadoanimales[index].color} - ${listadoanimales[index].tamanio}`;
            //listado.appendChild(lista);
        if (listadoanimales[index].constructor.name === 'Perro'){
            //No puedo usar index.nombre porque no es un for of, y al verme obligado a usar un for in la única forma de llamar a las propiedades del objeto es llamarlo en forma de array
            lista.innerText = `${listadoanimales[index].nombre} - ${listadoanimales[index].edad} - ${listadoanimales[index].peso} - ${listadoanimales[index].raza}`;
        }
        else if(listadoanimales[index].constructor.name === 'Gato') {
            lista.innerText = `${listadoanimales[index].nombre} - ${listadoanimales[index].edad} - ${listadoanimales[index].peso} - ${listadoanimales[index].color}`;
        }
        else if(listadoanimales[index].constructor.name === 'Conejo') {
            lista.innerText = `${listadoanimales[index].nombre} - ${listadoanimales[index].edad} - ${listadoanimales[index].peso} - ${listadoanimales[index].tamanio}`;
        }
        listado.push(lista);
    }
    for (indice of listado) {
        listadofinal.appendChild(indice);
    }
}