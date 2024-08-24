// https://open.er-api.com/v6/latest/USD (dolar-euro)
// https://api.coindesk.com/v1/bpi/currentprice.json (dolar-bitcoin)
// https://open.er-api.com/v6/latest/ARS (dolar-peso argentino)

/*
    Este programa es una resolución con varias formas en una para ver los diferentes manejos del curso
    utilizados en el mismo programa. Por eso las promesas se usan de forma diferente, en una se usa un callback,
    en dos se usan Fetch y en otra XMLHttpRequest... etc.
*/

function cargarContenido(){
    // Función que cargue las cotizaciones

    cargarCotizaciones(mostrarCotizacion);

    // Función que cargue los elementos

    // Función que cargue los textos
}

async function cargarCotizaciones(callback) {

    let promesa1 = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json'); // Esta promesa se hace con callback
    callback(await promesa1.json());

    let promesa2 = await fetch('https://open.er-api.com/v6/latest/USD'); // Esta promesa se hace de forma distinta, directa sin callbacks
    let datos2 = await promesa2.json();
    document.getElementById('UsdEur').append(datos2.rates.EUR); // A diferencia del callback de promesa1, el dato está en 'rates'

    let datos3 = await crearPedido('https://open.er-api.com/v6/latest/ARS'); // Esta es la tercera promesa, en lugar de fetch, se va a usar XMLHttpRequest
    document.getElementById('UsdArs').append(datos3.rates.USD);

}

function mostrarCotizacion(datos) {
    document.getElementById('BitcoinUsd').append(datos.bpi.USD.rate); // El dato buscado en el .json está en 'rate'
}

async function crearPedido(url){
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function() {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(xhr.statusText);
            }
        }
        xhr.send();
    })
}