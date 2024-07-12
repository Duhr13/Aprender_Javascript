let automovil = {
    marca: 'Ford',
    modelo: 'Fiesta',
    anio: 2015
}

function mostrarInfo() {
    for (let index in automovil) {
        document.write(index + ": " + automovil[index] + "<br>");
    }
}