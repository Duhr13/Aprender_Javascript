let automovil = {
    marca: 'Ford',
    modelo: 'Fiesta',
    anio: 2005,
    arrancar() {
        console.log('En marcha');
    }
}

function modificarAnio() {
    automovil.anio = 2018;
    console.log(automovil.anio);
}

function nuevaPropiedad() {
    automovil.color = 'rojo';   // Esta es una forma de añadir una nueva propiedad a un objeto
    automovil['motor'] = 'gasolina'; // Esta es otra forma de añadir una nueva propiedad al objeto ya existente
}