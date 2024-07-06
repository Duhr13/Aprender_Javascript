let precio = 0;
let frutas = ['manzana', 'naranja', 'banana']


function calcular() {
    let cantidad = document.getElementById("numero").value;
    let fruta = document.getElementById("seleccion").value;
    let resultado = document.getElementById("resultado");
    console.log(cantidad);
    console.log(fruta);
    switch(fruta) {
        case "manzana":
            precio = 15;
            resultado.innerText = precio * cantidad;
            break;
        case "naranja":
            precio = 20;
            resultado.textContent = precio * cantidad;
            break;
        case "banana":
            precio = 25;
            resultado.textContent = precio * cantidad;
            break;
        default:
            alert("Algo ha salido mal");
            break;
    };
}