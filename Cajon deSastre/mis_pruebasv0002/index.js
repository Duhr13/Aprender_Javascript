'use strict';

 /* Con estas dos funciones consigo que se muestren la fecha y la hora actual en la página web.
    Probablemente me pueda ser útil para los campos fecha de las bases de datos. */

let fechaHora = () => {
    let fecha = new Date();
    let dia = String(fecha.getDate()).padStart(2, '0');
    let hora = String(fecha.getHours()).padStart(2, '0');
    let minuto = String(fecha.getMinutes()).padStart(2, '0');
    let segundo = String(fecha.getSeconds()).padStart(2, '0');
    let mes = String(fecha.getMonth() + 1).padStart(2, '0');
    let año = fecha.getFullYear();
    let cadena = `${dia}/${mes}/${año} || ${hora}:${minuto}:${segundo}`;  

    let fechayHora = document.getElementById('fechaHora');
    fechayHora.innerText = cadena;
}

let mostrarFechaHora = () => {
    setInterval(fechaHora, 1000);
}

/* Voy a proceder a capturar el panel y meterlo en matrices 
    Para ello construiré una función "cosechadora" y luego la llamaré. */

let construirArraysPanel = (prefijo, cantidad) => {
    let array = new Array();
    for (let i = 1; i <= cantidad; i++) {
        array.push(document.querySelector(`#${prefijo}${i}`).textContent);
    }
    return array;
}

let D = construirArraysPanel('D', 11);
let C = construirArraysPanel('C', 11);
let E = construirArraysPanel('E', 11);
let c = construirArraysPanel('cc', 11);
let e = construirArraysPanel('ee', 11);
let f = construirArraysPanel('f', 11);
let Cw = construirArraysPanel('Cw', 11);
let V = construirArraysPanel('V', 11);
let K = construirArraysPanel('K', 11);
let k = construirArraysPanel('kk', 11);
let Kpa = construirArraysPanel('Kpa', 11);
let Kpb = construirArraysPanel('Kpb', 11);
let Fya = construirArraysPanel('Fya', 11);
let Fyb = construirArraysPanel('Fyb', 11);
let Jka = construirArraysPanel('Jka', 11);
let Jkb = construirArraysPanel('Jkb', 11);
let Xga = construirArraysPanel('Xga', 11);
let Lea = construirArraysPanel('Lea', 11);
let Leb = construirArraysPanel('Leb', 11);
let S = construirArraysPanel('S', 11);
let s = construirArraysPanel('ss', 11);
let M = construirArraysPanel('M', 11);
let N = construirArraysPanel('N', 11);
let P1 = construirArraysPanel('P1', 11);
let Lua = construirArraysPanel('Lua', 11);
let Lub = construirArraysPanel('Lub', 11);

/* A continuación la función de capturar el resultado */

let capturarResultados = () => {

    let res1 = Number(document.getElementById("resul1").value);
    let res2 = Number(document.getElementById("resul2").value);
    let res3 = Number(document.getElementById("resul3").value);
    let res4 = Number(document.getElementById("resul4").value);
    let res5 = Number(document.getElementById("resul5").value);
    let res6 = Number(document.getElementById("resul6").value);
    let res7 = Number(document.getElementById("resul7").value);
    let res8 = Number(document.getElementById("resul8").value);
    let res9 = Number(document.getElementById("resul9").value);
    let res10 = Number(document.getElementById("resul10").value);
    let res11 = Number(document.getElementById("resul11").value);

    let resulpanelC = [res1, res2, res3, res4, res5, res6, res7, res8, res9, res10, res11];
    return resulpanelC;
}

/* Función resolver. Detrás de ella generaré todas las funciones necesarias para resolver el panel. */

let resolverC = () => {

    // Con esta parte limpiamos, en cada uso, los nodos DOM donde volcaremos los informes

    document.getElementById("informeD").textContent = '';
    document.getElementById("informeC").textContent = '';
    document.getElementById("informec").textContent = '';
    document.getElementById("informeE").textContent = '';
    document.getElementById("informee").textContent = '';
    document.getElementById("informef").textContent = '';
    document.getElementById("informecw").textContent = '';
    document.getElementById("informev").textContent = '';
    document.getElementById("informeK").textContent = '';
    document.getElementById("informek").textContent = '';
    document.getElementById("informekpa").textContent = '';
    document.getElementById("informekpb").textContent = '';
    document.getElementById("informeFya").textContent = '';
    document.getElementById("informeFyb").textContent = '';
    document.getElementById("informeJka").textContent = '';
    document.getElementById("informeJkb").textContent = '';
    document.getElementById("informeXga").textContent = '';
    document.getElementById("informeLea").textContent = '';
    document.getElementById("informeLeb").textContent = '';
    document.getElementById("informeS").textContent = '';
    document.getElementById("informes").textContent = '';
    document.getElementById("informeM").textContent = '';
    document.getElementById("informeN").textContent = '';
    document.getElementById("informeP1").textContent = '';
    document.getElementById("informeLua"). textContent = '';
    document.getElementById("informeLub").textContent = '';
    
    let resultadoPanelC = capturarResultados();
    antiD();
    antiC();
    antic();
    
}

// Función genérica para búsqueda de anticuerpos simples sin antígenos antitéticos correspondientes u homocigotos.
// Del estilo de Anti-D o Anti-f.

let antigenoHomocigoto = (antigeno, informeId, nombreAntigeno) => {

    let anticuerpo = nombreAntigeno;
    let estadoAnticuerpo = '';

    let informe = document.getElementById(informeId); // Capturo el contenedor donde volcaré todo el resultado

    // Inicializo variables locales para la función
     
    let matrizResultados = capturarResultados();
    let nuevaMatrizResultados = new Array;
    let contadorAntigeno = 0;
    let contadorCoincidencias = 0;
    let contadorDiscrepancias = 0;
    let contadorEliminacion = 0;

    let listadoInforme = document.createElement("ol");

    for (let index = 0; index <= 10; index++) {
        // Primer bloque de Condicionales. Convertimos los resultados en + y 0 de tipo String
        nuevaMatrizResultados[index] = matrizResultados[index] > 0 ? "+" : "0";

        // Segundo bloque de Condicionales. Solo hace un conteo de positividades para el Antígeno en el Antigrama
        if (antigeno[index] === "+") {
            contadorAntigeno += 1;
        }

        // Tercer bloque de Condicionales. Los contadores que determinarán los resultados.
        let lineaMensaje = document.createElement("li");

        if (nuevaMatrizResultados[index] === "+" && antigeno[index] === "+") {
            contadorCoincidencias += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} coincide <br>`;
        } else if (nuevaMatrizResultados[index] === "0" && antigeno[index] === "+") {
            contadorEliminacion += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide, por lo que el anticuerpo anti-${anticuerpo} queda descartado <br>`;
        } else if (nuevaMatrizResultados[index] === "+" && antigeno[index] === "0") {
            contadorDiscrepancias += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar <br>`;
        } else {
            lineaMensaje.innerHTML = `La célula ${index + 1} es negativa para ambos <br>`;
        }

        lineaMensaje.style.color = "black";
        listadoInforme.appendChild(lineaMensaje);
    }

    // Aquí voy a preparar el resultado final de esta función
    let mensaje = document.createElement("p");

    if (contadorEliminacion > 0) {
        mensaje.innerHTML = `El anticuerpo anti-${anticuerpo} no se encuentra en el plasma del paciente`;
        mensaje.style.color = 'red';
        estadoAnticuerpo = 'red';
    } else if (contadorCoincidencias === contadorAntigeno && contadorDiscrepancias === 0) {
        mensaje.innerHTML = `El anticuerpo anti-${anticuerpo} se ha detectado en el plasma del paciente`;
        mensaje.style.color = 'green';
        estadoAnticuerpo = 'green';
    } else if (contadorCoincidencias === contadorAntigeno && contadorDiscrepancias > 0) {
        mensaje.innerHTML = `El anticuerpo anti-${anticuerpo} se ha detectado en el plasma del paciente y no se descarta la existencia de más anticuerpos`;
        mensaje.style.color = 'blue';
        estadoAnticuerpo = 'blue';
    }

    mensaje.style.fontWeight = 'bold';

    // Construímos el bloque del resultado para esta función. Todo lo que devolverá.
    informe.appendChild(listadoInforme);
    informe.appendChild(mensaje);
    informe.style.backgroundColor = 'white';
    informe.style.padding = '15px';
    informe.style.margin = '3px';
    informe.style.border = "solid";
    informe.style.borderRadius = '10px';
    switch (estadoAnticuerpo) {
        case 'green':
            informe.style.borderColor = 'green';
            break;
        case 'red':
            informe.style.borderColor = 'red';
            break;
        case 'blue':
            informe.style.borderColor = 'blue';
            break;
    }

    return informe.textContent;
}

/* Función para determinar los resultados de anticuerpos cuyos antígenos pueden verse afectados por el llamado Efecto Dosis
Esto ocurre por una disminución de la cantidad del antígeno debido a la existencia, y presencia, de su antígeno antitético
en la superficie del hematíe */

let antigenoHeterocigoto = (antigeno, agAntitetico, informeId, nombreAntigeno) => {

    let anticuerpo = nombreAntigeno;
    let estadoAnticuerpo = '';

    let informe = document.getElementById(informeId); // Capturo el contenedor donde volcaré todo el resultado

    // Inicializo variables locales para la función
     
    let matrizResultados = capturarResultados();
    let nuevaMatrizResultados = new Array;
    let contadorAntigeno = 0;
    let contadorCoincidencias = 0;
    let contadorDiscrepancias = 0;
    let contadorEliminacion = 0;
    let contadorHeterocigotas = 0;

    let listadoInforme = document.createElement("ol");

    for (let index = 0; index <= 10; index++) {
        // Primer bloque de Condicionales. Convertimos los resultados en + y 0 de tipo String
        nuevaMatrizResultados[index] = matrizResultados[index] > 0 ? "+" : "0";

        // Segundo bloque de Condicionales. Solo hace un conteo de positividades para el Antígeno en el Antigrama
        if (antigeno[index] === "+") {
            contadorAntigeno += 1;
        }
        
        // Tercer bloque de Condicionales. Para ayudar a detectar el efecto dosis. Devuelve un valor booleano.
        let posibleEfectoDosis = (matrizResultados[index] >= 0) && (matrizResultados[index] <= 2);

        // Cuarto bloque de Condicionales. Los contadores que determinarán los resultados.
        let lineaMensaje = document.createElement("li");

        if (nuevaMatrizResultados[index] === "+" && antigeno[index] === "+") {
            contadorCoincidencias += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} coincide <br>`;
        } else if (nuevaMatrizResultados[index] === "0" && antigeno[index] === "+") {
            if (agAntitetico[index] === '+' && posibleEfectoDosis) {
                contadorDiscrepancias += 1;
                lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar por Efecto Dosis`;
                contadorHeterocigotas += 1;
            }
            else {
                contadorEliminacion += 1;
                lineaMensaje.innerHTML = `La célula ${index + 1} no coincide, por lo que el anticuerpo anti-${anticuerpo} queda descartado <br>`;
            }
        } else if (nuevaMatrizResultados[index] === "+" && antigeno[index] === "0") {
            contadorDiscrepancias += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar <br>`;
        } else {
            lineaMensaje.innerHTML = `La célula ${index + 1} es negativa para ambos <br>`;
        }

        lineaMensaje.style.color = "black";
        listadoInforme.appendChild(lineaMensaje);

    }

    // Aquí voy a preparar el resultado final de esta función
    let mensaje = document.createElement("p");

    if (contadorEliminacion > 0) {
        mensaje.innerHTML = `El anticuerpo anti-${anticuerpo} no se encuentra en el plasma del paciente`;
        mensaje.style.color = 'red';
        estadoAnticuerpo = 'red';
    } else if (contadorCoincidencias === contadorAntigeno && contadorDiscrepancias === 0) {
        mensaje.innerHTML = `El anticuerpo anti-${anticuerpo} se ha detectado en el plasma del paciente`;
        mensaje.style.color = 'green';
        estadoAnticuerpo = 'green';
    } else if (contadorCoincidencias === contadorAntigeno && contadorDiscrepancias > 0) {
        mensaje.innerHTML = `El anticuerpo anti-${anticuerpo} se ha detectado en el plasma del paciente y no se descarta la existencia de más anticuerpos`;
        mensaje.style.color = 'blue';
        estadoAnticuerpo = 'blue';
    } else if ((contadorCoincidencias + contadorHeterocigotas) === contadorAntigeno) {
        mensaje.innerHTML = `El resultado de positividades y resultados negativos en células heterocigotas no descartan la existencia o ausencia de ${anticuerpo}`;
        mensaje.style.color = 'orange';
        estadoAnticuerpo = 'orange';
    }

    mensaje.style.fontWeight = 'bold';

    // Construímos el bloque del resultado para esta función. Todo lo que devolverá.
    informe.appendChild(listadoInforme);
    informe.appendChild(mensaje);
    informe.style.backgroundColor = 'white';
    informe.style.padding = '15px';
    informe.style.margin = '3px';
    informe.style.border = "solid";
    informe.style.borderRadius = '10px';
    switch (estadoAnticuerpo) {
        case 'green':
            informe.style.borderColor = 'green';
            break;
        case 'red':
            informe.style.borderColor = 'red';
            break;
        case 'blue':
            informe.style.borderColor = 'blue';
            break;
        case 'orange':
            informe.style.borderColor = 'orange';
            break;
    }

    return informe.textContent;
}



let antiD = () => antigenoHomocigoto(D, "informeD", "D");
let antiC = () => antigenoHeterocigoto(C, c, "informeC", "C");
let antic = () => antigenoHeterocigoto(c, C, "informec", "c");