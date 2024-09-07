// https://open.er-api.com/v6/latest/USD (dolar-euro)
// https://api.coindesk.com/v1/bpi/currentprice.json (dolar-bitcoin)
// https://open.er-api.com/v6/latest/ARS (dolar-peso argentino)

/*
 Esta adaptación con Callbacks ha funcionado pero no es eficiente en absoluto. He tenido que triplicar el código
 necesario para que funcionara, desgranando los callbacks uno en uno y haciendo funciones también únicas para cada
 promesa. Si intentaba juntarlo todo en uno... el programa fallaba y solo se ejecutaba la primera promesa.

 No estaría de más que le diera una vuelta al programa para ver si se me ocurre alguna forma de hacerlo en una función
 y con un solo callback.
*/

function cargarContenido(){
    // Función que cargue las cotizaciones

    cargarCotizacionesUno(mostrarCotizacionUno);
    cargarCotizacionesDos(mostrarCotizacionDos);
    cargarCotizacionesTres(mostrarCotizacionTres);

    // Función que cargue los elementos

    cargarElementos();

    // Función que cargue los textos

    cargarTextos();
}

async function cargarCotizacionesUno(callback) {

    await delay(3000); // Función para retrasar las tres promesas principales y que nos permita disfrutar del gif cargando

    let promesa1 = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json'); // Esta promesa se hace con callback
    callback(await promesa1.json());
}

async function cargarCotizacionesDos(callback) {
    await delay(3000);
    let promesa2 = await fetch('https://open.er-api.com/v6/latest/USD'); // Esta promesa se hace de forma distinta, directa sin callbacks
    callback(await promesa2.json());
}

async function cargarCotizacionesTres(callback) {
    await delay(3000);
    let promesa3 = await fetch('https://open.er-api.com/v6/latest/ARS'); // Esta es la tercera promesa, en lugar de fetch, se va a usar XMLHttpRequest
    callback(await promesa3.json());
    document.getElementById('imgEspera').style.visibility = 'hidden'; // Cuando carguen las tres promesas, el logo.gif vuelve a ocultarse
}

function mostrarCotizacionUno(datos) {
    document.getElementById('BitcoinUsd').append(datos.bpi.USD.rate); // El dato buscado en el .json está en 'rate'
}

function mostrarCotizacionDos(datos) {
    document.getElementById('UsdEur').append(datos.rates.EUR); // A diferencia del callback de promesa1, el dato está en 'rates'
}

function mostrarCotizacionTres(datos) {
    document.getElementById('UsdArs').append(datos.rates.USD);
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