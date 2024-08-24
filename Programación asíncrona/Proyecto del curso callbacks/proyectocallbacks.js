// https://open.er-api.com/v6/latest/USD (dolar-euro)
// https://api.coindesk.com/v1/bpi/currentprice.json (dolar-bitcoin)
// https://open.er-api.com/v6/latest/ARS (dolar-peso argentino)

function cargarContenido(){
    // Función que cargue las cotizaciones

    cargarCotizaciones(mostrarCotizacion);

    // Función que cargue los elementos

    // Función que cargue los textos
}

async function cargarCotizaciones(callback) {

    let promesa1 = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json'); // Esta promesa se hace con callback
    callback(await promesa1.json());

    let promesa2 = await fetch('https://open.er-api.com/v6/latest/USD');
    let datos2 = await promesa2.json();
    document.getElementById('UsdEur').append(datos2.rates.EUR); // A diferencia del callback de promesa1, el dato está en 'rates'

}

function mostrarCotizacion(datos) {
    document.getElementById('BitcoinUsd').append(datos.bpi.USD.rate); // El dato buscado en el .json está en 'rate'
}