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
    let cadena = `${dia}/${mes}/${año} ------ ${hora}:${minuto}:${segundo}`;  

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

    let res1Fic = Number(document.getElementById("resul1").value);
    let res2Fic = Number(document.getElementById("resul2").value);
    let res3Fic = Number(document.getElementById("resul3").value);
    let res4Fic = Number(document.getElementById("resul4").value);
    let res5Fic = Number(document.getElementById("resul5").value);
    let res6Fic = Number(document.getElementById("resul6").value);
    let res7Fic = Number(document.getElementById("resul7").value);
    let res8Fic = Number(document.getElementById("resul8").value);
    let res9Fic = Number(document.getElementById("resul9").value);
    let res10Fic = Number(document.getElementById("resul10").value);
    let res11Fic = Number(document.getElementById("resul11").value);

    let resulpanelC = [res1, res2, res3, res4, res5, res6, res7, res8, res9, res10, res11];
    let resulpanelCFic = [res1Fic, res2Fic, res3Fic, res4Fic, res5Fic, res6Fic, res7Fic, res8Fic, res9Fic, res10Fic, res11Fic];
    return resulpanelC, resulpanelCFic;
}

/* Función resolver. Detrás de ella generaré todas las funciones necesarias para resolver el panel. */

let resolverC = () => {

    // Con esta parte limpiamos, en cada uso, los nodos DOM donde volcaremos los informes

    document.getElementById("informeD").textContent = '';
    document.getElementById("informeDFic").textContent = '';
    document.getElementById("informeC").textContent = '';
    document.getElementById("informeCFic").textContent = '';
    document.getElementById("informec").textContent = '';
    document.getElementById("informecFic").textContent = '';
    document.getElementById("informeE").textContent = '';
    document.getElementById("informeEFic").textContent = '';
    document.getElementById("informee").textContent = '';
    document.getElementById("informeeFic").textContent = '';
    document.getElementById("informef").textContent = '';
    document.getElementById("informefFic").textContent = '';
    document.getElementById("informecw").textContent = '';
    document.getElementById("informecwFic").textContent = '';
    document.getElementById("informev").textContent = '';
    document.getElementById("informevFic").textContent = '';
    document.getElementById("informeK").textContent = '';
    document.getElementById("informeKFic").textContent = '';
    document.getElementById("informek").textContent = '';
    document.getElementById("informekFic").textContent = '';
    document.getElementById("informekpa").textContent = '';
    document.getElementById("informekpaFic").textContent = '';
    document.getElementById("informekpb").textContent = '';
    document.getElementById("informekpbFic").textContent = '';
    document.getElementById("informeFya").textContent = '';
    document.getElementById("informeFyaFic").textContent = '';
    document.getElementById("informeFyb").textContent = '';
    document.getElementById("informeFybFic").textContent = '';
    document.getElementById("informeJka").textContent = '';
    document.getElementById("informeJkaFic").textContent = '';
    document.getElementById("informeJkb").textContent = '';
    document.getElementById("informeJkbFic").textContent = '';
    document.getElementById("informeXga").textContent = '';
    document.getElementById("informeXgaFic").textContent = '';
    document.getElementById("informeLea").textContent = '';
    document.getElementById("informeLeaFic").textContent = '';
    document.getElementById("informeLeb").textContent = '';
    document.getElementById("informeLebFic").textContent = '';
    document.getElementById("informeS").textContent = '';
    document.getElementById("informeSFic").textContent = '';
    document.getElementById("informes").textContent = '';
    document.getElementById("informesFic").textContent = '';
    document.getElementById("informeM").textContent = '';
    document.getElementById("informeMFic").textContent = '';
    document.getElementById("informeN").textContent = '';
    document.getElementById("informeNFic").textContent = '';
    document.getElementById("informeP1").textContent = '';
    document.getElementById("informeP1Fic").textContent = '';
    document.getElementById("informeLua"). textContent = '';
    document.getElementById("informeLuaFic"). textContent = '';
    document.getElementById("informeLub").textContent = '';
    document.getElementById("informeLubFic").textContent = '';
    
    antiD();
    antiC();
    antic();
    antiE();
    antie();
    antif();
    antiCw();
    antiV();
    antiK();
    antik();
    antiKpa();
    antiKpb();
    antiFya();
    antiFyb();
    antiJka();
    antiJkb();
    antiXga();
    antiLea();
    antiLeb();
    antiS();
    antis();
    antiM();
    antiN();
    antiP1();
    antiLua();
    antiLub();
    
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
            informe.style.backgroundColor = '#CCFFCC';
            break;
        case 'red':
            informe.style.borderColor = 'red';
            informe.style.backgroundColor = '#FFCCCC';
            break;
        case 'blue':
            informe.style.borderColor = 'blue';
            informe.style.backgroundColor = '#99CCFF';
            break;
        case 'orange':
            informe.style.borderColor = 'orange';
            informe.style.backgroundColor = '#FFCC99';
            break;
    }

    return informe.textContent;
}

/* Función para determinar los resultados de anticuerpos cuyos antígenos pueden verse afectados por el llamado Efecto Dosis
Esto ocurre por una disminución de la cantidad del antígeno debido a la existencia, y presencia, de su antígeno antitético
en la superficie del hematíe */

let antigenoHeterocigoto = (antigeno, agAntitetico, informeId, nombreAntigeno) => {

    let informe = document.getElementById(informeId); // Capturo el contenedor donde volcaré todo el resultado

    // Inicializo variables locales para la función
     
    let matrizResultados = capturarResultados();
    let nuevaMatrizResultados = new Array;
    let anticuerpo = nombreAntigeno;
    let estadoAnticuerpo = '';
    let permisoHeterocigoto = true;    // Con esta variable voy a controlar el efecto dosis con positividades de hasta 2+
    let contadorAntigeno = 0;
    let contadorCoincidencias = 0;
    let contadorDiscrepancias = 0;
    let contadorEliminacion = 0;
    let contadorHeterocigotas = 0;

    let listadoInforme = document.createElement("ol");

    // En este bucle voy a descartar o confirmar la heterocigosis en base a los resultados. Positivos de 3+ o 4+ con negativos descarta el efecto dosis.

    for (let i = 0; i <= 10; i++) {
        if (matrizResultados[i] > 2) {
            permisoHeterocigoto = false;
        }
    }

    //Bucle principal donde sedeterminarán los contadores para luego clasificar los resultados

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
        } else if (nuevaMatrizResultados[index] === "0" && antigeno[index] === "+") {;
            if ((agAntitetico[index] === '+' && posibleEfectoDosis) && permisoHeterocigoto) {  // Si permisoHeterocigoto es false, todo es false y se ejecuta el "else".
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
    mensaje.style.fontWeight = 'bold';

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

    let encabezado =  document.createElement("p");
    encabezado.innerHTML = `Panel C Normal`

    // Construímos el bloque del resultado para esta función. Todo lo que devolverá.
    informe.appendChild(encabezado);
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
            informe.style.backgroundColor = '#CCFFCC';
            break;
        case 'red':
            informe.style.borderColor = 'red';
            informe.style.backgroundColor = '#FFCCCC';
            break;
        case 'blue':
            informe.style.borderColor = 'blue';
            informe.style.backgroundColor = '#99CCFF';
            break;
        case 'orange':
            informe.style.borderColor = 'orange';
            informe.style.backgroundColor = '#FFCC99';
            break;
    }

    return informe.textContent;
}

/* Estas funciones son las responsables de resolver el Panel C Normal (Fase Liss/Coombs) */

let antiD = () => antigenoHomocigoto(D, 'informeD', 'D');
let antiC = () => antigenoHeterocigoto(C, c, 'informeC', 'C');
let antic = () => antigenoHeterocigoto(c, C, 'informec', 'c');
let antiE = () => antigenoHeterocigoto(E, e, 'informeE', 'E');
let antie = () => antigenoHeterocigoto(e, E, 'informee', 'e');
let antif = () => antigenoHomocigoto(f, 'informef', 'f');
let antiCw = () => antigenoHomocigoto(Cw, 'informecw', 'Cw');
let antiV = () => antigenoHomocigoto(V, 'informev', 'V');
let antiK = () => antigenoHomocigoto(K, 'informeK', 'K');
let antik = () => antigenoHomocigoto(k, 'informek', 'k');
let antiKpa = () => antigenoHomocigoto(Kpa, 'informekpa', 'Kpa');
let antiKpb = () => antigenoHomocigoto(Kpb, 'informekpb', 'Kpb');
let antiFya = () => antigenoHeterocigoto(Fya, Fyb, 'informeFya', 'Fya');
let antiFyb = () => antigenoHeterocigoto(Fyb, Fya, 'informeFyb', 'Fyb');
let antiJka = () => antigenoHeterocigoto(Jka, Jkb, 'informeJka', 'Jka');
let antiJkb = () => antigenoHeterocigoto(Jkb, Jka, 'informeJkb', 'Jkb');
let antiXga = () => antigenoHomocigoto(Xga, 'informeXga', 'Xga');
let antiLea = () => antigenoHeterocigoto(Lea, Leb, 'informeLea', 'Lea');
let antiLeb = () => antigenoHeterocigoto(Leb, Lea, 'informeLeb', 'Leb');
let antiS = () => antigenoHeterocigoto (S, s, 'informeS', 'S');
let antis = () => antigenoHeterocigoto (s, S, 'informes', 's');
let antiM = () => antigenoHeterocigoto (M, N, 'informeM', 'M');
let antiN = () => antigenoHeterocigoto (N, M, 'informeN', 'N');
let antiP1 = () => antigenoHomocigoto(P1, 'informeP1', 'P1');
let antiLua = () => antigenoHomocigoto(Lua, 'informeLua', 'Lua');
let antiLub = () => antigenoHomocigoto(Lub, 'informeLub', 'Lub');

/* Estas funciones son las responsables de resolver el Panel C Ficina (Enzima proteolítica) */