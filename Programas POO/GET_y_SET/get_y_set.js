class Ciudad {
    constructor(nombre, pais, cantHabitantes){
        this._nombre = nombre;
        this._pais = pais;
        this._cantHabitantes = cantHabitantes;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get pais() {
        return this._pais;
    }

    set pais(nuevoPais) {
        this._pais = nuevoPais;
    }

    get cantHabitantes() {
        return this._cantHabitantes;
    }

    set cantHabitantes(nuevoCantHabitantes) {
        this._cantHabitantes = nuevoCantHabitantes;
    }   
}