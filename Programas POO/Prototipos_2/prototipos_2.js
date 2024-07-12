function Futbolista(nombre, equipo, posicion) {
    this.nombre = nombre;
    this.equipo = equipo;
    this.posicion = posicion;
} 

function prototipo() {
    let futbolista1 = new Futbolista('Messi', 'PSG', 'Delantero');
    console.log(futbolista1.valueOf());
}