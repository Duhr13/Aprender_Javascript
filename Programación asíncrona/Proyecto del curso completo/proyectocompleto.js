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

    cargarElementos();

    // Función que cargue los textos

    cargarTextos();
}

async function cargarCotizaciones(callback) {

    await delay(3000); // Función para retrasar las tres promesas principales y que nos permita disfrutar del gif cargando

    let promesa1 = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json'); // Esta promesa se hace con callback
    callback(await promesa1.json());

    let promesa2 = await fetch('https://open.er-api.com/v6/latest/USD'); // Esta promesa se hace de forma distinta, directa sin callbacks
    let datos2 = await promesa2.json();
    document.getElementById('UsdEur').append(datos2.rates.EUR); // A diferencia del callback de promesa1, el dato está en 'rates'

    let datos3 = await crearPedido('https://open.er-api.com/v6/latest/ARS'); // Esta es la tercera promesa, en lugar de fetch, se va a usar XMLHttpRequest
    document.getElementById('UsdArs').append(datos3.rates.USD);

    document.getElementById('imgEspera').style.visibility = 'hidden'; // Cuando carguen las tres promesas, el logo.gif vuelve a ocultarse

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

function cargarElementos() {
    document.getElementById('imgLogo').setAttribute('src', 'logo.jpg'); // No hay logo de momento
    document.getElementById('titulo').textContent = 'Cotizaciones Online';
    document.getElementById('imgEspera').setAttribute('src', 'loading.gif');
    document.getElementById('imgEspera').style.visibility = 'visible'; // Volveremos a ocultarlo después de las tres promesas arriba
}

function cargarTextos() {
    document.getElementById('UsdEur').append('EUR a USD: ');
    document.getElementById('UsdArs').append('ARG a USD: ');
    document.getElementById('BitcoinUsd').append('BitCoin a USD: ');
}

function delay(ms){
    return new Promise(function(res){
        setTimeout(res, ms);
    })
}