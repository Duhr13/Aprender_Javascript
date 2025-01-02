'use strict'

/*
    Primera versión del programa que constará de un esqueleto básico y que sea capaz de resolver burdamente un Panel C sencillito (Anti-E o Anti-K por ejemplo).
    No me detendré con florituras y eso lo dejaré para siguientes versiones.
*/


// VARIABLES GLOBALES DEL PANEL

let D = [document.querySelector("#D1").textContent, document.querySelector("#D2").textContent, document.querySelector("#D3").textContent,document.querySelector("#D4").textContent,
    document.querySelector("#D5").textContent, document.querySelector("#D6").textContent, document.querySelector("#D7").textContent, document.querySelector("#D8").textContent,
    document.querySelector("#D9").textContent, document.querySelector("#D10").textContent, document.querySelector("#D11").textContent];

let C = [document.querySelector("#C1").textContent, document.querySelector("#C2").textContent, document.querySelector("#C3").textContent,document.querySelector("#C4").textContent,
    document.querySelector("#C5").textContent, document.querySelector("#C6").textContent, document.querySelector("#C7").textContent, document.querySelector("#C8").textContent,
    document.querySelector("#C9").textContent, document.querySelector("#C10").textContent, document.querySelector("#C11").textContent];

let c = [document.querySelector("#cc1").textContent, document.querySelector("#cc2").textContent, document.querySelector("#cc3").textContent,document.querySelector("#cc4").textContent,
    document.querySelector("#cc5").textContent, document.querySelector("#cc6").textContent, document.querySelector("#cc7").textContent, document.querySelector("#cc8").textContent,
    document.querySelector("#cc9").textContent, document.querySelector("#cc10").textContent, document.querySelector("#cc11").textContent];

let E = [document.querySelector("#E1").textContent, document.querySelector("#E2").textContent, document.querySelector("#E3").textContent,document.querySelector("#E4").textContent,
    document.querySelector("#E5").textContent, document.querySelector("#E6").textContent, document.querySelector("#E7").textContent, document.querySelector("#E8").textContent,
    document.querySelector("#E9").textContent, document.querySelector("#E10").textContent, document.querySelector("#E11").textContent];

let e = [document.querySelector("#ee1").textContent, document.querySelector("#ee2").textContent, document.querySelector("#ee3").textContent,document.querySelector("#ee4").textContent,
    document.querySelector("#ee5").textContent, document.querySelector("#ee6").textContent, document.querySelector("#ee7").textContent, document.querySelector("#ee8").textContent,
    document.querySelector("#ee9").textContent, document.querySelector("#ee10").textContent, document.querySelector("#ee11").textContent];

let f = [document.querySelector("#f1").textContent, document.querySelector("#f2").textContent, document.querySelector("#f3").textContent,document.querySelector("#f4").textContent,
    document.querySelector("#f5").textContent, document.querySelector("#f6").textContent, document.querySelector("#f7").textContent, document.querySelector("#f8").textContent,
    document.querySelector("#f9").textContent, document.querySelector("#f10").textContent, document.querySelector("#f11").textContent];

let Cw = [document.querySelector("#Cw1").textContent, document.querySelector("#Cw2").textContent, document.querySelector("#Cw3").textContent,document.querySelector("#Cw4").textContent,
    document.querySelector("#Cw5").textContent, document.querySelector("#Cw6").textContent, document.querySelector("#Cw7").textContent, document.querySelector("#Cw8").textContent,
    document.querySelector("#Cw9").textContent, document.querySelector("#Cw10").textContent, document.querySelector("#Cw11").textContent];

let V = [document.querySelector("#V1").textContent, document.querySelector("#V2").textContent, document.querySelector("#V3").textContent,document.querySelector("#V4").textContent,
    document.querySelector("#V5").textContent, document.querySelector("#V6").textContent, document.querySelector("#V7").textContent, document.querySelector("#V8").textContent,
    document.querySelector("#V9").textContent, document.querySelector("#V10").textContent, document.querySelector("#V11").textContent];

let K = [document.querySelector("#K1").textContent, document.querySelector("#K2").textContent, document.querySelector("#K3").textContent,document.querySelector("#K4").textContent,
    document.querySelector("#K5").textContent, document.querySelector("#K6").textContent, document.querySelector("#K7").textContent, document.querySelector("#K8").textContent,
    document.querySelector("#K9").textContent, document.querySelector("#K10").textContent, document.querySelector("#K11").textContent];

let k = [document.querySelector("#kk1").textContent, document.querySelector("#kk2").textContent, document.querySelector("#kk3").textContent,document.querySelector("#kk4").textContent,
    document.querySelector("#kk5").textContent, document.querySelector("#kk6").textContent, document.querySelector("#kk7").textContent, document.querySelector("#kk8").textContent,
    document.querySelector("#kk9").textContent, document.querySelector("#kk10").textContent, document.querySelector("#kk11").textContent];

let Kpa = [document.querySelector("#Kpa1").textContent, document.querySelector("#Kpa2").textContent, document.querySelector("#Kpa3").textContent,document.querySelector("#Kpa4").textContent,
    document.querySelector("#Kpa5").textContent, document.querySelector("#Kpa6").textContent, document.querySelector("#Kpa7").textContent, document.querySelector("#Kpa8").textContent,
    document.querySelector("#Kpa9").textContent, document.querySelector("#Kpa10").textContent, document.querySelector("#Kpa11").textContent];

let Kpb = [document.querySelector("#Kpb1").textContent, document.querySelector("#Kpb2").textContent, document.querySelector("#Kpb3").textContent,document.querySelector("#Kpb4").textContent,
    document.querySelector("#Kpb5").textContent, document.querySelector("#Kpb6").textContent, document.querySelector("#Kpb7").textContent, document.querySelector("#Kpb8").textContent,
    document.querySelector("#Kpb9").textContent, document.querySelector("#Kpb10").textContent, document.querySelector("#Kpb11").textContent];

let Jsa = [document.querySelector("#Jsa1").textContent, document.querySelector("#Jsa2").textContent, document.querySelector("#Jsa3").textContent,document.querySelector("#Jsa4").textContent,
    document.querySelector("#Jsa5").textContent, document.querySelector("#Jsa6").textContent, document.querySelector("#Jsa7").textContent, document.querySelector("#Jsa8").textContent,
    document.querySelector("#Jsa9").textContent, document.querySelector("#Jsa10").textContent, document.querySelector("#Jsa11").textContent];

let Jsb = [document.querySelector("#Jsb1").textContent, document.querySelector("#Jsb2").textContent, document.querySelector("#Jsb3").textContent,document.querySelector("#Jsb4").textContent,
    document.querySelector("#Jsb5").textContent, document.querySelector("#Jsb6").textContent, document.querySelector("#Jsb7").textContent, document.querySelector("#Jsb8").textContent,
    document.querySelector("#Jsb9").textContent, document.querySelector("#Jsb10").textContent, document.querySelector("#Jsb11").textContent];

let Fya = [document.querySelector("#Fya1").textContent, document.querySelector("#Fya2").textContent, document.querySelector("#Fya3").textContent,document.querySelector("#Fya4").textContent,
    document.querySelector("#Fya5").textContent, document.querySelector("#Fya6").textContent, document.querySelector("#Fya7").textContent, document.querySelector("#Fya8").textContent,
    document.querySelector("#Fya9").textContent, document.querySelector("#Fya10").textContent, document.querySelector("#Fya11").textContent];

let Fyb = [document.querySelector("#Fyb1").textContent, document.querySelector("#Fyb2").textContent, document.querySelector("#Fyb3").textContent,document.querySelector("#Fyb4").textContent,
    document.querySelector("#Fyb5").textContent, document.querySelector("#Fyb6").textContent, document.querySelector("#Fyb7").textContent, document.querySelector("#Fyb8").textContent,
    document.querySelector("#Fyb9").textContent, document.querySelector("#Fyb10").textContent, document.querySelector("#Fyb11").textContent];

let Jka = [document.querySelector("#Jka1").textContent, document.querySelector("#Jka2").textContent, document.querySelector("#Jka3").textContent,document.querySelector("#Jka4").textContent,
    document.querySelector("#Jka5").textContent, document.querySelector("#Jka6").textContent, document.querySelector("#Jka7").textContent, document.querySelector("#Jka8").textContent,
    document.querySelector("#Jka9").textContent, document.querySelector("#Jka10").textContent, document.querySelector("#Jka11").textContent];

let Jkb = [document.querySelector("#Jkb1").textContent, document.querySelector("#Jkb2").textContent, document.querySelector("#Jkb3").textContent,document.querySelector("#Jkb4").textContent,
    document.querySelector("#Jkb5").textContent, document.querySelector("#Jkb6").textContent, document.querySelector("#Jkb7").textContent, document.querySelector("#Jkb8").textContent,
    document.querySelector("#Jkb9").textContent, document.querySelector("#Jkb10").textContent, document.querySelector("#Jkb11").textContent];

let Xga = [document.querySelector("#Xga1").textContent, document.querySelector("#Xga2").textContent, document.querySelector("#Xga3").textContent,document.querySelector("#Xga4").textContent,
    document.querySelector("#Xga5").textContent, document.querySelector("#Xga6").textContent, document.querySelector("#Xga7").textContent, document.querySelector("#Xga8").textContent,
    document.querySelector("#Xga9").textContent, document.querySelector("#Xga10").textContent, document.querySelector("#Xga11").textContent];

let Lea = [document.querySelector("#Lea1").textContent, document.querySelector("#Lea2").textContent, document.querySelector("#Lea3").textContent,document.querySelector("#Lea4").textContent,
    document.querySelector("#Lea5").textContent, document.querySelector("#Lea6").textContent, document.querySelector("#Lea7").textContent, document.querySelector("#Lea8").textContent,
    document.querySelector("#Lea9").textContent, document.querySelector("#Lea10").textContent, document.querySelector("#Lea11").textContent];

let Leb = [document.querySelector("#Leb1").textContent, document.querySelector("#Leb2").textContent, document.querySelector("#Leb3").textContent,document.querySelector("#Leb4").textContent,
    document.querySelector("#Leb5").textContent, document.querySelector("#Leb6").textContent, document.querySelector("#Leb7").textContent, document.querySelector("#Leb8").textContent,
    document.querySelector("#Leb9").textContent, document.querySelector("#Leb10").textContent, document.querySelector("#Leb11").textContent];

let S = [document.querySelector("#S1").textContent, document.querySelector("#S2").textContent, document.querySelector("#S3").textContent,document.querySelector("#S4").textContent,
    document.querySelector("#S5").textContent, document.querySelector("#S6").textContent, document.querySelector("#S7").textContent, document.querySelector("#S8").textContent,
    document.querySelector("#S9").textContent, document.querySelector("#S10").textContent, document.querySelector("#S11").textContent];

let s = [document.querySelector("#ss1").textContent, document.querySelector("#ss2").textContent, document.querySelector("#ss3").textContent,document.querySelector("#ss4").textContent,
    document.querySelector("#ss5").textContent, document.querySelector("#ss6").textContent, document.querySelector("#ss7").textContent, document.querySelector("#ss8").textContent,
    document.querySelector("#ss9").textContent, document.querySelector("#ss10").textContent, document.querySelector("#ss11").textContent];

let M = [document.querySelector("#M1").textContent, document.querySelector("#M2").textContent, document.querySelector("#M3").textContent,document.querySelector("#M4").textContent,
    document.querySelector("#M5").textContent, document.querySelector("#M6").textContent, document.querySelector("#M7").textContent, document.querySelector("#M8").textContent,
    document.querySelector("#M9").textContent, document.querySelector("#M10").textContent, document.querySelector("#M11").textContent];

let N = [document.querySelector("#N1").textContent, document.querySelector("#N2").textContent, document.querySelector("#N3").textContent,document.querySelector("#N4").textContent,
    document.querySelector("#N5").textContent, document.querySelector("#N6").textContent, document.querySelector("#N7").textContent, document.querySelector("#N8").textContent,
    document.querySelector("#N9").textContent, document.querySelector("#N10").textContent, document.querySelector("#N11").textContent];

let P1 = [document.querySelector("#P11").textContent, document.querySelector("#P12").textContent, document.querySelector("#P13").textContent,document.querySelector("#P14").textContent,
    document.querySelector("#P15").textContent, document.querySelector("#P16").textContent, document.querySelector("#P17").textContent, document.querySelector("#P18").textContent,
    document.querySelector("#P19").textContent, document.querySelector("#P110").textContent, document.querySelector("#P111").textContent];

let Lua = [document.querySelector("#Lua1").textContent, document.querySelector("#Lua2").textContent, document.querySelector("#Lua3").textContent,document.querySelector("#Lua4").textContent,
    document.querySelector("#Lua5").textContent, document.querySelector("#Lua6").textContent, document.querySelector("#Lua7").textContent, document.querySelector("#Lua8").textContent,
    document.querySelector("#Lua9").textContent, document.querySelector("#Lua10").textContent, document.querySelector("#Lua11").textContent];

let Lub = [document.querySelector("#Lub1").textContent, document.querySelector("#Lub2").textContent, document.querySelector("#Lub3").textContent,document.querySelector("#Lub4").textContent,
    document.querySelector("#Lub5").textContent, document.querySelector("#Lub6").textContent, document.querySelector("#Lub7").textContent, document.querySelector("#Lub8").textContent,
    document.querySelector("#Lub9").textContent, document.querySelector("#Lub10").textContent, document.querySelector("#Lub11").textContent];

function resolverC(){

    // Primero limpiamos todo

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
    
    let resultadoPanelC = capturarResultados();
    prueba();
    informefinal();
}

function prueba() {
    
    console.log("D: ", D);
    console.log("C: ", C);
    console.log("c: ", c);
    console.log("E: ", E);
    console.log("e: :", e);
    console.log("f: :", f);
    console.log("Cw: ", Cw);
    console.log("V: ", V);
    console.log("K: ", K);
    console.log("k: ", k);
    console.log("Kpa ", Kpa);
    console.log("Kpb: ", Kpb);
    console.log("Jsa: ", Jsa);
    console.log("Jsb: ", Jsb);
    console.log("Fya: ", Fya);
    console.log("Fyb: ", Fyb);
    console.log("Jka: ", Jka);
    console.log("Jkb: ", Jkb);
    console.log("Xga: ", Xga);
    console.log("Lea: ", Lea);
    console.log("Leb: ", Leb);
    console.log("S: ", S);
    console.log("s: ", s);
    console.log("M: ", M);
    console.log("N: ", N);
    console.log("P1: ", P1);
    console.log("Lua: ", Lua);
    console.log("Lub: ", Lub);
}

// Función de captura de resultados del Panel C 0.8%

function capturarResultados() {

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

// Función de validación (de momento obsoleta porque lo he resuelto con un Select en HTML)

/* function validacionResultadosPanel() {
    let resultadoPanelC = capturarResultados();

    for (let index of resultadoPanelC) {
        while ((isNaN(index)) || (index < 0) || (index > 4)) {
            return alert("Introduce un valor correcto que debe ser 0, 0.5, 1, 2, 3 o 4");
        }
    }
} */

// Función para resolver el panel C. Voy a intentar usar la sintaxis de EcmaScript 6

let informefinal = () => {

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
    
};

let antiD = () => {

        let informeD = document.getElementById("informeD"); // Capturo el contenedor donde volcaré todo el resultado

    // Inicializo variables locales para la función

    let matrizResultados = capturarResultados();
    let nuevaMatrizResultados = new Array;
    let contadorAntiD = 0;
    let contadorCoincidencias = 0;
    let contadorDiscrepancias = 0;
    let contadorEliminacion = 0;

    let resultadoComparativo = document.createElement("ol");

    for (let index = 0; index <= 10; index++) {
        
        // Primer bloque de Condicionales. Convertimos los resultados en + y 0 de tipo String

        if (matrizResultados[index] > 0) {
            nuevaMatrizResultados[index] = "+";
        }
        else {
            nuevaMatrizResultados[index] = "0";
        }

        // Segundo bloque de Condicionales. Solo hace un conteo de positividades para el Antígeno en el Antigrama

        if (D[index] === "+") {
            contadorAntiD += 1;
        }

        // Tercer bloque de Condicionales. Los contadores que determinarán los resultados.

        let lineaMensaje = document.createElement("li");

        if ((nuevaMatrizResultados[index] === "+") && (D[index] === "+")) {
            contadorCoincidencias += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} coincide <br>`;
            lineaMensaje.style.color = "black";
        }
        else if ((nuevaMatrizResultados[index] === "0") && (D[index] === "+")) {
            contadorEliminacion += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide, por lo que Anti-D queda descartado <br>`;
            lineaMensaje.style.color = "black";
        }
        else if ((nuevaMatrizResultados[index] === "+") && (D[index] === "0")) {
            contadorDiscrepancias += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar <br>`;
            lineaMensaje.style.color = "black";
        }
        else {
            lineaMensaje.innerHTML = `La célula ${index + 1} es negativa para ambos <br>`;
            lineaMensaje.style.color = "black";
        }

        resultadoComparativo.appendChild(lineaMensaje);
    };

    console.log("Coincidencias: ", contadorCoincidencias);
    console.log("Discrepancias: ", contadorDiscrepancias);
    console.log("Eliminación: ", contadorEliminacion);
    console.log(nuevaMatrizResultados);

    // Aquí voy a preparar el resultado final de esta función

    let mensajeD = document.createElement("p");

    if (contadorEliminacion > 0) {
        mensajeD.innerHTML = "Anti-D no se encuentra en el plasma del paciente"
        mensajeD.style.color = 'red';
        mensajeD.style.fontWeight = 'bold';
    }
    else if ((contadorCoincidencias === contadorAntiD) && (contadorDiscrepancias === 0)) {
        mensajeD.innerHTML = "Anti-D se ha detectado en el plasma del paciente";
        mensajeD.style.color = 'green';
        mensajeD.style.fontWeight = 'bold';
    }
    else if ((contadorCoincidencias === contadorAntiD) && (contadorDiscrepancias > 0)) {
        mensajeD.innerHTML = "Anti-D se ha detectado en el plasma del paciente y no se descarta la existencia de más anticuerpos";
        mensajeD.style.color = 'blue';
        mensajeD.style.fontWeight = 'bold';
    }

    // Construímos el bloque del resultado para esta función. Todo lo que devolverá.

    informeD.appendChild(resultadoComparativo);
    informeD.appendChild(mensajeD);
    informeD.style.backgroundColor = 'white';
    informeD.style.padding = '15px';
    informeD.style.margin = '3px';
    informeD.style.border = "solid";
    informeD.style.borderRadius = '10px';
    informeD.style.borderColor = "red";

    return informeD.textContent;

} 

let antiC = () => {

    let informeC = document.getElementById("informeC"); // Capturo el contenedor donde volcaré todo el resultado

// Inicializo variables locales para la función

let matrizResultados = capturarResultados();
let nuevaMatrizResultados = new Array;
let contadorAntiC = 0;
let contadorCoincidencias = 0;
let contadorDiscrepancias = 0;
let contadorEliminacion = 0;
let contadorHeterocigotas = 0;

let resultadoComparativo = document.createElement("ol");

for (let index = 0; index <= 10; index++) {
    
    // Primer bloque de Condicionales. Convertimos los resultados en + y 0 de tipo String

    if (matrizResultados[index] > 0) {
        nuevaMatrizResultados[index] = "+";
    }
    else {
        nuevaMatrizResultados[index] = "0";
    }

    // Segundo bloque de Condicionales. Solo hace un conteo de positividades para el Antígeno en el Antigrama

    if (C[index] === "+") {
        contadorAntiC += 1;
    }

    // Bucle para ayudar a detectar efecto de dosis

    let posibleEfectoDosisC;
    for (let i = 0; i <= 10; i++) {
        if ((matrizResultados[i] >= 0) && (matrizResultados[i] <= 2)) {
            posibleEfectoDosisC = true;
        }
        else {
            posibleEfectoDosisC = false;
        }
    }

    // Tercer bloque de Condicionales. Los contadores que determinarán los resultados.

    let lineaMensaje = document.createElement("li");

    if ((nuevaMatrizResultados[index] === "+") && (C[index] === "+")) {
        contadorCoincidencias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} coincide <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "0") && (C[index] === "+")) {
        if ((c[index] === "+") && (posibleEfectoDosisC === true)) {
            contadorDiscrepancias += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar porque los antígenos antitéticos son heterocigotos y la positividad
            del resultado no es lo suficientemente potente como para descartarlo<br>`;
            lineaMensaje.style.color = "black";
            contadorHeterocigotas += 1;
        }
        else {
            contadorEliminacion += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide, por lo que Anti-C queda descartado <br>`;
            lineaMensaje.style.color = "black";
        }
    }
    else if ((nuevaMatrizResultados[index] === "+") && (C[index] === "0")) {
        contadorDiscrepancias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar <br>`;
        lineaMensaje.style.color = "black";
    }
    else {
        lineaMensaje.innerHTML = `La célula ${index + 1} es negativa para ambos <br>`;
        lineaMensaje.style.color = "black";
    }

    resultadoComparativo.appendChild(lineaMensaje);
};

console.log("Coincidencias: ", contadorCoincidencias);
console.log("Discrepancias: ", contadorDiscrepancias);
console.log("Eliminación: ", contadorEliminacion);
console.log(nuevaMatrizResultados);

// Aquí voy a preparar el resultado final de esta función

let mensajeC = document.createElement("p");

if (contadorEliminacion > 0) {
    mensajeC.innerHTML = "Anti-C no se encuentra en el plasma del paciente"
    mensajeC.style.color = 'red';
    mensajeC.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiC) && (contadorDiscrepancias === 0)) {
    mensajeC.innerHTML = "Anti-C se ha detectado en el plasma del paciente";
    mensajeC.style.color = 'green';
    mensajeC.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiC) && (contadorDiscrepancias > 0)) {
    mensajeC.innerHTML = "Anti-C se ha detectado en el plasma del paciente y no se descarta la existencia de más anticuerpos";
    mensajeC.style.color = 'blue';
    mensajeC.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias + contadorHeterocigotas) === contadorAntiC) {
    mensajeC.innerHTML = "El resultado de positividades y resultados negativos en células heterocigotas /Cc/ no descartan la existencia o ausencia de Anti-C";
    mensajeC.style.color = 'orange';
    mensajeC.style.fontWeight = 'bold';
}

// Construímos el bloque del resultado para esta función. Todo lo que devolverá.

informeC.appendChild(resultadoComparativo);
informeC.appendChild(mensajeC);
informeC.style.backgroundColor = 'white';
informeC.style.padding = '15px';
informeC.style.margin = '3px';
informeC.style.border = "solid";
informeC.style.borderRadius = '10px';
informeC.style.borderColor = "red";

return informeC.textContent;

} 

let antic = () => {

    let informec = document.getElementById("informec"); // Capturo el contenedor donde volcaré todo el resultado

// Inicializo variables locales para la función

let matrizResultados = capturarResultados();
let nuevaMatrizResultados = new Array;
let contadorAntic = 0;
let contadorCoincidencias = 0;
let contadorDiscrepancias = 0;
let contadorEliminacion = 0;
let contadorHeterocigotas = 0;

let resultadoComparativo = document.createElement("ol");

for (let index = 0; index <= 10; index++) {
    
    // Primer bloque de Condicionales. Convertimos los resultados en + y 0 de tipo String

    if (matrizResultados[index] > 0) {
        nuevaMatrizResultados[index] = "+";
    }
    else {
        nuevaMatrizResultados[index] = "0";
    }

    // Segundo bloque de Condicionales. Solo hace un conteo de positividades para el Antígeno en el Antigrama

    if (c[index] === "+") {
        contadorAntic += 1;
    }

    // Bucle para ayudar a detectar efecto de dosis

    let posibleEfectoDosisc;
    for (let i = 0; i <= 10; i++) {
        if ((matrizResultados[i] >= 0) && (matrizResultados[i] <= 2)) {
            posibleEfectoDosisc = true;
        }
        else {
            posibleEfectoDosisc = false;
        }
    }

    // Tercer bloque de Condicionales. Los contadores que determinarán los resultados.

    let lineaMensaje = document.createElement("li");

    if ((nuevaMatrizResultados[index] === "+") && (c[index] === "+")) {
        contadorCoincidencias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} coincide <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "0") && (c[index] === "+")) {
        if ((C[index] === "+") && (posibleEfectoDosisc === true)) {
            contadorDiscrepancias += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar porque los antígenos antitéticos son heterocigotos y la positividad
            del resultado no es lo suficientemente potente como para descartarlo<br>`;
            lineaMensaje.style.color = "black";
            contadorHeterocigotas += 1;
        }
        else {
            contadorEliminacion += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide, por lo que Anti-c queda descartado <br>`;
            lineaMensaje.style.color = "black";
        }
    }
    else if ((nuevaMatrizResultados[index] === "+") && (c[index] === "0")) {
        contadorDiscrepancias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar <br>`;
        lineaMensaje.style.color = "black";
    }
    else {
        lineaMensaje.innerHTML = `La célula ${index + 1} es negativa para ambos <br>`;
        lineaMensaje.style.color = "black";
    }

    resultadoComparativo.appendChild(lineaMensaje);
};

console.log("Coincidencias: ", contadorCoincidencias);
console.log("Discrepancias: ", contadorDiscrepancias);
console.log("Eliminación: ", contadorEliminacion);
console.log(nuevaMatrizResultados);

// Aquí voy a preparar el resultado final de esta función

let mensajec = document.createElement("p");

if (contadorEliminacion > 0) {
    mensajec.innerHTML = "Anti-c no se encuentra en el plasma del paciente"
    mensajec.style.color = 'red';
    mensajec.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntic) && (contadorDiscrepancias === 0)) {
    mensajec.innerHTML = "Anti-c se ha detectado en el plasma del paciente";
    mensajec.style.color = 'green';
    mensajec.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntic) && (contadorDiscrepancias > 0)) {
    mensajec.innerHTML = "Anti-c se ha detectado en el plasma del paciente y no se descarta la existencia de más anticuerpos";
    mensajec.style.color = 'blue';
    mensajec.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias + contadorHeterocigotas) === contadorAntic) {
    mensajec.innerHTML = "El resultado de positividades y resultados negativos en células heterocigotas /Cc/ no descartan la existencia o ausencia de Anti-c";
    mensajec.style.color = 'orange';
    mensajec.style.fontWeight = 'bold';
}

// Construímos el bloque del resultado para esta función. Todo lo que devolverá.

informec.appendChild(resultadoComparativo);
informec.appendChild(mensajec);
informec.style.backgroundColor = 'white';
informec.style.padding = '15px';
informec.style.margin = '3px';
informec.style.border = "solid";
informec.style.borderRadius = '10px';
informec.style.borderColor = "red";

return informec.textContent;

} 

let antiE = () => {

    let informeE = document.getElementById("informeE"); // Capturo el contenedor donde volcaré todo el resultado

// Inicializo variables locales para la función

let matrizResultados = capturarResultados();
let nuevaMatrizResultados = new Array;
let contadorAntiE = 0;
let contadorCoincidencias = 0;
let contadorDiscrepancias = 0;
let contadorEliminacion = 0;
let contadorHeterocigotas = 0;

let resultadoComparativo = document.createElement("ol");

for (let index = 0; index <= 10; index++) {
    
    // Primer bloque de Condicionales. Convertimos los resultados en + y 0 de tipo String

    if (matrizResultados[index] > 0) {
        nuevaMatrizResultados[index] = "+";
    }
    else {
        nuevaMatrizResultados[index] = "0";
    }

    // Segundo bloque de Condicionales. Solo hace un conteo de positividades para el Antígeno en el Antigrama

    if (E[index] === "+") {
        contadorAntiE += 1;
    }

    // Bucle para ayudar a detectar efecto de dosis

    let posibleEfectoDosisE;
    for (let i = 0; i <= 10; i++) {
        if ((matrizResultados[i] >= 0) && (matrizResultados[i] <= 2)) {
            posibleEfectoDosisE = true;
        }
        else {
            posibleEfectoDosisE = false;
        }
    }

    // Tercer bloque de Condicionales. Los contadores que determinarán los resultados.

    let lineaMensaje = document.createElement("li");

    if ((nuevaMatrizResultados[index] === "+") && (E[index] === "+")) {
        contadorCoincidencias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} coincide <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "0") && (E[index] === "+")) {
        if ((e[index] === "+") && (posibleEfectoDosisE === true)) {
            contadorDiscrepancias += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar porque los antígenos antitéticos son heterocigotos y la positividad
            del resultado no es lo suficientemente potente como para descartarlo<br>`;
            lineaMensaje.style.color = "black";
            contadorHeterocigotas += 1;
        }
        else {
            contadorEliminacion += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide, por lo que Anti-E queda descartado <br>`;
            lineaMensaje.style.color = "black";
        }
    }
    else if ((nuevaMatrizResultados[index] === "+") && (E[index] === "0")) {
        contadorDiscrepancias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar <br>`;
        lineaMensaje.style.color = "black";
    }
    else {
        lineaMensaje.innerHTML = `La célula ${index + 1} es negativa para ambos <br>`;
        lineaMensaje.style.color = "black";
    }

    resultadoComparativo.appendChild(lineaMensaje);
};

console.log("Coincidencias: ", contadorCoincidencias);
console.log("Discrepancias: ", contadorDiscrepancias);
console.log("Eliminación: ", contadorEliminacion);
console.log(nuevaMatrizResultados);

// Aquí voy a preparar el resultado final de esta función

let mensajeE = document.createElement("p");

if (contadorEliminacion > 0) {
    mensajeE.innerHTML = "Anti-E no se encuentra en el plasma del paciente"
    mensajeE.style.color = 'red';
    mensajeE.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiE) && (contadorDiscrepancias === 0)) {
    mensajeE.innerHTML = "Anti-E se ha detectado en el plasma del paciente";
    mensajeE.style.color = 'green';
    mensajeE.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiE) && (contadorDiscrepancias > 0)) {
    mensajeE.innerHTML = "Anti-E se ha detectado en el plasma del paciente y no se descarta la existencia de más anticuerpos";
    mensajeE.style.color = 'blue';
    mensajeE.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias + contadorHeterocigotas) === contadorAntiE) {
    mensajeE.innerHTML = "El resultado de positividades y resultados negativos en células heterocigotas /Ee/ no descartan la existencia o ausencia de Anti-E";
    mensajeE.style.color = 'orange';
    mensajeE.style.fontWeight = 'bold';
}

// Construímos el bloque del resultado para esta función. Todo lo que devolverá.

informeE.appendChild(resultadoComparativo);
informeE.appendChild(mensajeE);
informeE.style.backgroundColor = 'white';
informeE.style.padding = '15px';
informeE.style.margin = '3px';
informeE.style.border = "solid";
informeE.style.borderRadius = '10px';
informeE.style.borderColor = "red";

return informeE.textContent;

} 

let antie = () => {

    let informee = document.getElementById("informee"); // Capturo el contenedor donde volcaré todo el resultado

// Inicializo variables locales para la función

let matrizResultados = capturarResultados();
let nuevaMatrizResultados = new Array;
let contadorAntie = 0;
let contadorCoincidencias = 0;
let contadorDiscrepancias = 0;
let contadorEliminacion = 0;
let contadorHeterocigotas = 0;

let resultadoComparativo = document.createElement("ol");

for (let index = 0; index <= 10; index++) {
    
    // Primer bloque de Condicionales. Convertimos los resultados en + y 0 de tipo String

    if (matrizResultados[index] > 0) {
        nuevaMatrizResultados[index] = "+";
    }
    else {
        nuevaMatrizResultados[index] = "0";
    }

    // Segundo bloque de Condicionales. Solo hace un conteo de positividades para el Antígeno en el Antigrama

    if (e[index] === "+") {
        contadorAntie += 1;
    }

    // Bucle para ayudar a detectar efecto de dosis

    let posibleEfectoDosise;
    for (let i = 0; i <= 10; i++) {
        if ((matrizResultados[i] >= 0) && (matrizResultados[i] <= 2)) {
            posibleEfectoDosise = true;
        }
        else {
            posibleEfectoDosise = false;
        }
    }

    // Tercer bloque de Condicionales. Los contadores que determinarán los resultados.

    let lineaMensaje = document.createElement("li");

    if ((nuevaMatrizResultados[index] === "+") && (e[index] === "+")) {
        contadorCoincidencias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} coincide <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "0") && (e[index] === "+")) {
        if ((E[index] === "+") && (posibleEfectoDosise === true)) {
            contadorDiscrepancias += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar porque los antígenos antitéticos son heterocigotos y la positividad
            del resultado no es lo suficientemente potente como para descartarlo<br>`;
            lineaMensaje.style.color = "black";
            contadorHeterocigotas += 1;
        }
        else {
            contadorEliminacion += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide, por lo que Anti-e queda descartado <br>`;
            lineaMensaje.style.color = "black";
        }
    }
    else if ((nuevaMatrizResultados[index] === "+") && (e[index] === "0")) {
        contadorDiscrepancias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar Anti-e <br>`;
        lineaMensaje.style.color = "black";
    }
    else {
        lineaMensaje.innerHTML = `La célula ${index + 1} es negativa para ambos <br>`;
        lineaMensaje.style.color = "black";
    }

    resultadoComparativo.appendChild(lineaMensaje);
};

console.log("Coincidencias: ", contadorCoincidencias);
console.log("Discrepancias: ", contadorDiscrepancias);
console.log("Eliminación: ", contadorEliminacion);
console.log(nuevaMatrizResultados);

// Aquí voy a preparar el resultado final de esta función

let mensajee = document.createElement("p");

if (contadorEliminacion > 0) {
    mensajee.innerHTML = "Anti-e no se encuentra en el plasma del paciente"
    mensajee.style.color = 'red';
    mensajee.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntie) && (contadorDiscrepancias === 0)) {
    mensajee.innerHTML = "Anti-e se ha detectado en el plasma del paciente";
    mensajee.style.color = 'green';
    mensajee.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntie) && (contadorDiscrepancias > 0)) {
    mensajee.innerHTML = "Anti-e se ha detectado en el plasma del paciente y no se descarta la existencia de más anticuerpos";
    mensajee.style.color = 'blue';
    mensajee.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias + contadorHeterocigotas) === contadorAntie) {
    mensajee.innerHTML = "El resultado de positividades y resultados negativos en células heterocigotas /Ee/ no descartan la existencia o ausencia de Anti-e";
    mensajee.style.color = 'orange';
    mensajee.style.fontWeight = 'bold';
}

// Construímos el bloque del resultado para esta función. Todo lo que devolverá.

informee.appendChild(resultadoComparativo);
informee.appendChild(mensajee);
informee.style.backgroundColor = 'white';
informee.style.padding = '15px';
informee.style.margin = '3px';
informee.style.border = "solid";
informee.style.borderRadius = '10px';
informee.style.borderColor = "red";

return informee.textContent;

} 

let antif = () => {

    let informef = document.getElementById("informef"); // Capturo el contenedor donde volcaré todo el resultado

// Inicializo variables locales para la función

let matrizResultados = capturarResultados();
let nuevaMatrizResultados = new Array;
let contadorAntif = 0;
let contadorCoincidencias = 0;
let contadorDiscrepancias = 0;
let contadorEliminacion = 0;
let contadorHeterocigotas = 0;

let resultadoComparativo = document.createElement("ol");

for (let index = 0; index <= 10; index++) {
    
    // Primer bloque de Condicionales. Convertimos los resultados en + y 0 de tipo String

    if (matrizResultados[index] > 0) {
        nuevaMatrizResultados[index] = "+";
    }
    else {
        nuevaMatrizResultados[index] = "0";
    }

    // Segundo bloque de Condicionales. Solo hace un conteo de positividades para el Antígeno en el Antigrama

    if (f[index] === "+") {
        contadorAntif += 1;
    }

    // Tercer bloque de Condicionales. Los contadores que determinarán los resultados.

    let lineaMensaje = document.createElement("li");

    if ((nuevaMatrizResultados[index] === "+") && (f[index] === "+")) {
        contadorCoincidencias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} coincide <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "0") && (f[index] === "+")) {
        contadorEliminacion += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide, por lo que Anti-f queda descartado <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "+") && (f[index] === "0")) {
        contadorDiscrepancias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar Anti-f <br>`;
        lineaMensaje.style.color = "black";
    }
    else {
        lineaMensaje.innerHTML = `La célula ${index + 1} es negativa para ambos <br>`;
        lineaMensaje.style.color = "black";
    }

    resultadoComparativo.appendChild(lineaMensaje);
};

console.log("Coincidencias: ", contadorCoincidencias);
console.log("Discrepancias: ", contadorDiscrepancias);
console.log("Eliminación: ", contadorEliminacion);
console.log(nuevaMatrizResultados);

// Aquí voy a preparar el resultado final de esta función

let mensajef = document.createElement("p");

if (contadorEliminacion > 0) {
    mensajef.innerHTML = "Anti-f no se encuentra en el plasma del paciente"
    mensajef.style.color = 'red';
    mensajef.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntif) && (contadorDiscrepancias === 0)) {
    mensajef.innerHTML = "Anti-f se ha detectado en el plasma del paciente";
    mensajef.style.color = 'green';
    mensajef.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntif) && (contadorDiscrepancias > 0)) {
    mensajef.innerHTML = "Anti-f se ha detectado en el plasma del paciente y no se descarta la existencia de más anticuerpos";
    mensajef.style.color = 'blue';
    mensajef.style.fontWeight = 'bold';
}

// Construímos el bloque del resultado para esta función. Todo lo que devolverá.

informef.appendChild(resultadoComparativo);
informef.appendChild(mensajef);
informef.style.backgroundColor = 'white';
informef.style.padding = '15px';
informef.style.margin = '3px';
informef.style.border = "solid";
informef.style.borderRadius = '10px';
informef.style.borderColor = "red";

return informef.textContent;

} 

let antiCw = () => {

    let informecw = document.getElementById("informecw"); // Capturo el contenedor donde volcaré todo el resultado

// Inicializo variables locales para la función

let matrizResultados = capturarResultados();
let nuevaMatrizResultados = new Array;
let contadorAnticw = 0;
let contadorCoincidencias = 0;
let contadorDiscrepancias = 0;
let contadorEliminacion = 0;

let resultadoComparativo = document.createElement("ol");

for (let index = 0; index <= 10; index++) {
    
    // Primer bloque de Condicionales. Convertimos los resultados en + y 0 de tipo String

    if (matrizResultados[index] > 0) {
        nuevaMatrizResultados[index] = "+";
    }
    else {
        nuevaMatrizResultados[index] = "0";
    }

    // Segundo bloque de Condicionales. Solo hace un conteo de positividades para el Antígeno en el Antigrama

    if (Cw[index] === "+") {
        contadorAnticw += 1;
    }

    // Tercer bloque de Condicionales. Los contadores que determinarán los resultados.

    let lineaMensaje = document.createElement("li");

    if ((nuevaMatrizResultados[index] === "+") && (Cw[index] === "+")) {
        contadorCoincidencias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} coincide <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "0") && (Cw[index] === "+")) {
        contadorEliminacion += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide, por lo que Anti-f queda descartado <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "+") && (Cw[index] === "0")) {
        contadorDiscrepancias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar Anti-Cw <br>`;
        lineaMensaje.style.color = "black";
    }
    else {
        lineaMensaje.innerHTML = `La célula ${index + 1} es negativa para ambos <br>`;
        lineaMensaje.style.color = "black";
    }

    resultadoComparativo.appendChild(lineaMensaje);
};

console.log("Coincidencias: ", contadorCoincidencias);
console.log("Discrepancias: ", contadorDiscrepancias);
console.log("Eliminación: ", contadorEliminacion);
console.log(nuevaMatrizResultados);

// Aquí voy a preparar el resultado final de esta función

let mensajecw = document.createElement("p");

if (contadorEliminacion > 0) {
    mensajecw.innerHTML = "Anti-Cw no se encuentra en el plasma del paciente"
    mensajecw.style.color = 'red';
    mensajecw.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAnticw) && (contadorDiscrepancias === 0)) {
    mensajecw.innerHTML = "Anti-Cw se ha detectado en el plasma del paciente";
    mensajecw.style.color = 'green';
    mensajecw.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAnticw) && (contadorDiscrepancias > 0)) {
    mensajecw.innerHTML = "Anti-Cw se ha detectado en el plasma del paciente y no se descarta la existencia de más anticuerpos";
    mensajecw.style.color = 'blue';
    mensajecw.style.fontWeight = 'bold';
}

// Construímos el bloque del resultado para esta función. Todo lo que devolverá.

informecw.appendChild(resultadoComparativo);
informecw.appendChild(mensajecw);
informecw.style.backgroundColor = 'white';
informecw.style.padding = '15px';
informecw.style.margin = '3px';
informecw.style.border = "solid";
informecw.style.borderRadius = '10px';
informecw.style.borderColor = "red";

return informecw.textContent;

} 

let antiV = () => {

    let informev = document.getElementById("informev"); // Capturo el contenedor donde volcaré todo el resultado

// Inicializo variables locales para la función

let matrizResultados = capturarResultados();
let nuevaMatrizResultados = new Array;
let contadorAntiv = 0;
let contadorCoincidencias = 0;
let contadorDiscrepancias = 0;
let contadorEliminacion = 0;

let resultadoComparativo = document.createElement("ol");

for (let index = 0; index <= 10; index++) {
    
    // Primer bloque de Condicionales. Convertimos los resultados en + y 0 de tipo String

    if (matrizResultados[index] > 0) {
        nuevaMatrizResultados[index] = "+";
    }
    else {
        nuevaMatrizResultados[index] = "0";
    }

    // Segundo bloque de Condicionales. Solo hace un conteo de positividades para el Antígeno en el Antigrama

    if (V[index] === "+") {
        contadorAntiv += 1;
    }

    // Tercer bloque de Condicionales. Los contadores que determinarán los resultados.

    let lineaMensaje = document.createElement("li");

    if ((nuevaMatrizResultados[index] === "+") && (V[index] === "+")) {
        contadorCoincidencias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} coincide <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "0") && (V[index] === "+")) {
        contadorEliminacion += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide, por lo que Anti-V queda descartado <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "+") && (V[index] === "0")) {
        contadorDiscrepancias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar Anti-V <br>`;
        lineaMensaje.style.color = "black";
    }
    else {
        lineaMensaje.innerHTML = `La célula ${index + 1} es negativa para ambos <br>`;
        lineaMensaje.style.color = "black";
    }

    resultadoComparativo.appendChild(lineaMensaje);
};

console.log("Coincidencias: ", contadorCoincidencias);
console.log("Discrepancias: ", contadorDiscrepancias);
console.log("Eliminación: ", contadorEliminacion);
console.log(nuevaMatrizResultados);

// Aquí voy a preparar el resultado final de esta función

let mensajev = document.createElement("p");

if (contadorEliminacion > 0) {
    mensajev.innerHTML = "Anti-V no se encuentra en el plasma del paciente"
    mensajev.style.color = 'red';
    mensajev.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiv) && (contadorDiscrepancias === 0)) {
    mensajev.innerHTML = "Anti-V se ha detectado en el plasma del paciente";
    mensajev.style.color = 'green';
    mensajev.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiv) && (contadorDiscrepancias > 0)) {
    mensajev.innerHTML = "Anti-V se ha detectado en el plasma del paciente y no se descarta la existencia de más anticuerpos";
    mensajev.style.color = 'blue';
    mensajev.style.fontWeight = 'bold';
}

// Construímos el bloque del resultado para esta función. Todo lo que devolverá.

informev.appendChild(resultadoComparativo);
informev.appendChild(mensajev);
informev.style.backgroundColor = 'white';
informev.style.padding = '15px';
informev.style.margin = '3px';
informev.style.border = "solid";
informev.style.borderRadius = '10px';
informev.style.borderColor = "red";

return informev.textContent;

}

let antiK = () => {

    let informeK = document.getElementById("informeK"); // Capturo el contenedor donde volcaré todo el resultado

// Inicializo variables locales para la función

let matrizResultados = capturarResultados();
let nuevaMatrizResultados = new Array;
let contadorAntiK = 0;
let contadorCoincidencias = 0;
let contadorDiscrepancias = 0;
let contadorEliminacion = 0;

let resultadoComparativo = document.createElement("ol");

for (let index = 0; index <= 10; index++) {
    
    // Primer bloque de Condicionales. Convertimos los resultados en + y 0 de tipo String

    if (matrizResultados[index] > 0) {
        nuevaMatrizResultados[index] = "+";
    }
    else {
        nuevaMatrizResultados[index] = "0";
    }

    // Segundo bloque de Condicionales. Solo hace un conteo de positividades para el Antígeno en el Antigrama

    if (K[index] === "+") {
        contadorAntiK += 1;
    }

    // Tercer bloque de Condicionales. Los contadores que determinarán los resultados.

    let lineaMensaje = document.createElement("li");

    if ((nuevaMatrizResultados[index] === "+") && (K[index] === "+")) {
        contadorCoincidencias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} coincide <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "0") && (K[index] === "+")) {
        contadorEliminacion += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide, por lo que Anti-K queda descartado <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "+") && (K[index] === "0")) {
        contadorDiscrepancias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar Anti-K <br>`;
        lineaMensaje.style.color = "black";
    }
    else {
        lineaMensaje.innerHTML = `La célula ${index + 1} es negativa para ambos <br>`;
        lineaMensaje.style.color = "black";
    }

    resultadoComparativo.appendChild(lineaMensaje);
};

console.log("Coincidencias: ", contadorCoincidencias);
console.log("Discrepancias: ", contadorDiscrepancias);
console.log("Eliminación: ", contadorEliminacion);
console.log(nuevaMatrizResultados);

// Aquí voy a preparar el resultado final de esta función

let mensajeK = document.createElement("p");

if (contadorEliminacion > 0) {
    mensajeK.innerHTML = "Anti-K no se encuentra en el plasma del paciente"
    mensajeK.style.color = 'red';
    mensajeK.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiK) && (contadorDiscrepancias === 0)) {
    mensajeK.innerHTML = "Anti-K se ha detectado en el plasma del paciente";
    mensajeK.style.color = 'green';
    mensajeK.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiK) && (contadorDiscrepancias > 0)) {
    mensajeK.innerHTML = "Anti-K se ha detectado en el plasma del paciente y no se descarta la existencia de más anticuerpos";
    mensajeK.style.color = 'blue';
    mensajeK.style.fontWeight = 'bold';
}

// Construímos el bloque del resultado para esta función. Todo lo que devolverá.

informeK.appendChild(resultadoComparativo);
informeK.appendChild(mensajeK);
informeK.style.backgroundColor = 'white';
informeK.style.padding = '15px';
informeK.style.margin = '3px';
informeK.style.border = "solid";
informeK.style.borderRadius = '10px';
informeK.style.borderColor = "red";

return informeK.textContent;

}

let antik = () => {

    let informek = document.getElementById("informek"); // Capturo el contenedor donde volcaré todo el resultado

// Inicializo variables locales para la función

let matrizResultados = capturarResultados();
let nuevaMatrizResultados = new Array;
let contadorAntik = 0;
let contadorCoincidencias = 0;
let contadorDiscrepancias = 0;
let contadorEliminacion = 0;

let resultadoComparativo = document.createElement("ol");

for (let index = 0; index <= 10; index++) {
    
    // Primer bloque de Condicionales. Convertimos los resultados en + y 0 de tipo String

    if (matrizResultados[index] > 0) {
        nuevaMatrizResultados[index] = "+";
    }
    else {
        nuevaMatrizResultados[index] = "0";
    }

    // Segundo bloque de Condicionales. Solo hace un conteo de positividades para el Antígeno en el Antigrama

    if (k[index] === "+") {
        contadorAntik += 1;
    }

    // Tercer bloque de Condicionales. Los contadores que determinarán los resultados.

    let lineaMensaje = document.createElement("li");

    if ((nuevaMatrizResultados[index] === "+") && (k[index] === "+")) {
        contadorCoincidencias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} coincide <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "0") && (k[index] === "+")) {
        contadorEliminacion += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide, por lo que Anti-k queda descartado <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "+") && (k[index] === "0")) {
        contadorDiscrepancias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar Anti-k <br>`;
        lineaMensaje.style.color = "black";
    }
    else {
        lineaMensaje.innerHTML = `La célula ${index + 1} es negativa para ambos <br>`;
        lineaMensaje.style.color = "black";
    }

    resultadoComparativo.appendChild(lineaMensaje);
};

console.log("Coincidencias: ", contadorCoincidencias);
console.log("Discrepancias: ", contadorDiscrepancias);
console.log("Eliminación: ", contadorEliminacion);
console.log(nuevaMatrizResultados);

// Aquí voy a preparar el resultado final de esta función

let mensajek = document.createElement("p");

if (contadorEliminacion > 0) {
    mensajek.innerHTML = "Anti-k no se encuentra en el plasma del paciente"
    mensajek.style.color = 'red';
    mensajek.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntik) && (contadorDiscrepancias === 0)) {
    mensajek.innerHTML = "Anti-k se ha detectado en el plasma del paciente";
    mensajek.style.color = 'green';
    mensajek.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntik) && (contadorDiscrepancias > 0)) {
    mensajek.innerHTML = "Anti-k se ha detectado en el plasma del paciente y no se descarta la existencia de más anticuerpos";
    mensajek.style.color = 'blue';
    mensajek.style.fontWeight = 'bold';
}

// Construímos el bloque del resultado para esta función. Todo lo que devolverá.

informek.appendChild(resultadoComparativo);
informek.appendChild(mensajek);
informek.style.backgroundColor = 'white';
informek.style.padding = '15px';
informek.style.margin = '3px';
informek.style.border = "solid";
informek.style.borderRadius = '10px';
informek.style.borderColor = "red";

return informek.textContent;

}

let antiKpa = () => {

    let informeKpa = document.getElementById("informekpa"); // Capturo el contenedor donde volcaré todo el resultado

// Inicializo variables locales para la función

let matrizResultados = capturarResultados();
let nuevaMatrizResultados = new Array;
let contadorAntiKpa = 0;
let contadorCoincidencias = 0;
let contadorDiscrepancias = 0;
let contadorEliminacion = 0;

let resultadoComparativo = document.createElement("ol");

for (let index = 0; index <= 10; index++) {
    
    // Primer bloque de Condicionales. Convertimos los resultados en + y 0 de tipo String

    if (matrizResultados[index] > 0) {
        nuevaMatrizResultados[index] = "+";
    }
    else {
        nuevaMatrizResultados[index] = "0";
    }

    // Segundo bloque de Condicionales. Solo hace un conteo de positividades para el Antígeno en el Antigrama

    if (Kpa[index] === "+") {
        contadorAntiKpa += 1;
    }

    // Tercer bloque de Condicionales. Los contadores que determinarán los resultados.

    let lineaMensaje = document.createElement("li");

    if ((nuevaMatrizResultados[index] === "+") && (Kpa[index] === "+")) {
        contadorCoincidencias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} coincide <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "0") && (Kpa[index] === "+")) {
        contadorEliminacion += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide, por lo que Anti-Kpa queda descartado <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "+") && (Kpa[index] === "0")) {
        contadorDiscrepancias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar Anti-Kpa <br>`;
        lineaMensaje.style.color = "black";
    }
    else {
        lineaMensaje.innerHTML = `La célula ${index + 1} es negativa para ambos <br>`;
        lineaMensaje.style.color = "black";
    }

    resultadoComparativo.appendChild(lineaMensaje);
};

console.log("Coincidencias: ", contadorCoincidencias);
console.log("Discrepancias: ", contadorDiscrepancias);
console.log("Eliminación: ", contadorEliminacion);
console.log(nuevaMatrizResultados);

// Aquí voy a preparar el resultado final de esta función

let mensajeKpa = document.createElement("p");

if (contadorEliminacion > 0) {
    mensajeKpa.innerHTML = "Anti-Kpa no se encuentra en el plasma del paciente"
    mensajeKpa.style.color = 'red';
    mensajeKpa.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiKpa) && (contadorDiscrepancias === 0)) {
    mensajeKpa.innerHTML = "Anti-Kpa se ha detectado en el plasma del paciente";
    mensajeKpa.style.color = 'green';
    mensajeKpa.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiKpa) && (contadorDiscrepancias > 0)) {
    mensajeKpa.innerHTML = "Anti-Kpa se ha detectado en el plasma del paciente y no se descarta la existencia de más anticuerpos";
    mensajeKpa.style.color = 'blue';
    mensajeKpa.style.fontWeight = 'bold';
}

// Construímos el bloque del resultado para esta función. Todo lo que devolverá.

informeKpa.appendChild(resultadoComparativo);
informeKpa.appendChild(mensajeKpa);
informeKpa.style.backgroundColor = 'white';
informeKpa.style.padding = '15px';
informeKpa.style.margin = '3px';
informeKpa.style.border = "solid";
informeKpa.style.borderRadius = '10px';
informeKpa.style.borderColor = "red";

return informeKpa.textContent;

}

let antiKpb = () => {

    let informeKpb = document.getElementById("informekpb"); // Capturo el contenedor donde volcaré todo el resultado

// Inicializo variables locales para la función

let matrizResultados = capturarResultados();
let nuevaMatrizResultados = new Array;
let contadorAntiKpb = 0;
let contadorCoincidencias = 0;
let contadorDiscrepancias = 0;
let contadorEliminacion = 0;

let resultadoComparativo = document.createElement("ol");

for (let index = 0; index <= 10; index++) {
    
    // Primer bloque de Condicionales. Convertimos los resultados en + y 0 de tipo String

    if (matrizResultados[index] > 0) {
        nuevaMatrizResultados[index] = "+";
    }
    else {
        nuevaMatrizResultados[index] = "0";
    }

    // Segundo bloque de Condicionales. Solo hace un conteo de positividades para el Antígeno en el Antigrama

    if (Kpb[index] === "+") {
        contadorAntiKpb += 1;
    }

    // Tercer bloque de Condicionales. Los contadores que determinarán los resultados.

    let lineaMensaje = document.createElement("li");

    if ((nuevaMatrizResultados[index] === "+") && (Kpb[index] === "+")) {
        contadorCoincidencias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} coincide <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "0") && (Kpb[index] === "+")) {
        contadorEliminacion += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide, por lo que Anti-Kpb queda descartado <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "+") && (Kpb[index] === "0")) {
        contadorDiscrepancias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar Anti-Kpb <br>`;
        lineaMensaje.style.color = "black";
    }
    else {
        lineaMensaje.innerHTML = `La célula ${index + 1} es negativa para ambos <br>`;
        lineaMensaje.style.color = "black";
    }

    resultadoComparativo.appendChild(lineaMensaje);
};

console.log("Coincidencias: ", contadorCoincidencias);
console.log("Discrepancias: ", contadorDiscrepancias);
console.log("Eliminación: ", contadorEliminacion);
console.log(nuevaMatrizResultados);

// Aquí voy a preparar el resultado final de esta función

let mensajeKpb = document.createElement("p");

if (contadorEliminacion > 0) {
    mensajeKpb.innerHTML = "Anti-Kpb no se encuentra en el plasma del paciente"
    mensajeKpb.style.color = 'red';
    mensajeKpb.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiKpb) && (contadorDiscrepancias === 0)) {
    mensajeKpb.innerHTML = "Anti-Kpb se ha detectado en el plasma del paciente";
    mensajeKpb.style.color = 'green';
    mensajeKpb.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiKpb) && (contadorDiscrepancias > 0)) {
    mensajeKpb.innerHTML = "Anti-Kpb se ha detectado en el plasma del paciente y no se descarta la existencia de más anticuerpos";
    mensajeKpb.style.color = 'blue';
    mensajeKpb.style.fontWeight = 'bold';
}

// Construímos el bloque del resultado para esta función. Todo lo que devolverá.

informeKpb.appendChild(resultadoComparativo);
informeKpb.appendChild(mensajeKpb);
informeKpb.style.backgroundColor = 'white';
informeKpb.style.padding = '15px';
informeKpb.style.margin = '3px';
informeKpb.style.border = "solid";
informeKpb.style.borderRadius = '10px';
informeKpb.style.borderColor = "red";

return informeKpb.textContent;

}

let antiFya = () => {

    let informeFya = document.getElementById("informeFya"); // Capturo el contenedor donde volcaré todo el resultado

// Inicializo variables locales para la función

let matrizResultados = capturarResultados();
let nuevaMatrizResultados = new Array;
let contadorAntiFya = 0;
let contadorCoincidencias = 0;
let contadorDiscrepancias = 0;
let contadorEliminacion = 0;
let contadorHeterocigotas = 0;

let resultadoComparativo = document.createElement("ol");

for (let index = 0; index <= 10; index++) {
    
    // Primer bloque de Condicionales. Convertimos los resultados en + y 0 de tipo String

    if (matrizResultados[index] > 0) {
        nuevaMatrizResultados[index] = "+";
    }
    else {
        nuevaMatrizResultados[index] = "0";
    }

    // Segundo bloque de Condicionales. Solo hace un conteo de positividades para el Antígeno en el Antigrama

    if (Fya[index] === "+") {
        contadorAntiFya += 1;
    }

    // Bucle para ayudar a detectar efecto de dosis

    let posibleEfectoDosisFya;
    for (let i = 0; i <= 10; i++) {
        if ((matrizResultados[i] >= 0) && (matrizResultados[i] <= 2)) {
            posibleEfectoDosisFya = true;
        }
        else {
            posibleEfectoDosisFya = false;
        }
    }

    // Tercer bloque de Condicionales. Los contadores que determinarán los resultados.

    let lineaMensaje = document.createElement("li");

    if ((nuevaMatrizResultados[index] === "+") && (Fya[index] === "+")) {
        contadorCoincidencias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} coincide <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "0") && (Fya[index] === "+")) {
        if ((Fyb[index] === "+") && (posibleEfectoDosisFya === true)) {
            contadorDiscrepancias += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar porque los antígenos antitéticos son heterocigotos y la positividad
            del resultado no es lo suficientemente potente como para descartarlo<br>`;
            lineaMensaje.style.color = "black";
            contadorHeterocigotas += 1;
        }
        else {
            contadorEliminacion += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide, por lo que Anti-Fya queda descartado <br>`;
            lineaMensaje.style.color = "black";
        }
    }
    else if ((nuevaMatrizResultados[index] === "+") && (Fya[index] === "0")) {
        contadorDiscrepancias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar <br>`;
        lineaMensaje.style.color = "black";
    }
    else {
        lineaMensaje.innerHTML = `La célula ${index + 1} es negativa para ambos <br>`;
        lineaMensaje.style.color = "black";
    }

    resultadoComparativo.appendChild(lineaMensaje);
};

console.log("Coincidencias: ", contadorCoincidencias);
console.log("Discrepancias: ", contadorDiscrepancias);
console.log("Eliminación: ", contadorEliminacion);
console.log(nuevaMatrizResultados);

// Aquí voy a preparar el resultado final de esta función

let mensajeFya = document.createElement("p");

if (contadorEliminacion > 0) {
    mensajeFya.innerHTML = "Anti-Fya no se encuentra en el plasma del paciente"
    mensajeFya.style.color = 'red';
    mensajeFya.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiFya) && (contadorDiscrepancias === 0)) {
    mensajeFya.innerHTML = "Anti-Fya se ha detectado en el plasma del paciente";
    mensajeFya.style.color = 'green';
    mensajeFya.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiFya) && (contadorDiscrepancias > 0)) {
    mensajeFya.innerHTML = "Anti-Fya se ha detectado en el plasma del paciente y no se descarta la existencia de más anticuerpos";
    mensajeFya.style.color = 'blue';
    mensajeFya.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias + contadorHeterocigotas) === contadorAntiFya) {
    mensajeFya.innerHTML = "El resultado de positividades y resultados negativos en células heterocigotas /FyaFyb/ no descartan la existencia o ausencia de Anti-Fya";
    mensajeFya.style.color = 'orange';
    mensajeFya.style.fontWeight = 'bold';
}

// Construímos el bloque del resultado para esta función. Todo lo que devolverá.

informeFya.appendChild(resultadoComparativo);
informeFya.appendChild(mensajeFya);
informeFya.style.backgroundColor = 'white';
informeFya.style.padding = '15px';
informeFya.style.margin = '3px';
informeFya.style.border = "solid";
informeFya.style.borderRadius = '10px';
informeFya.style.borderColor = "red";

return informeFya.textContent;

} 

let antiFyb = () => {

    let informeFyb = document.getElementById("informeFyb"); // Capturo el contenedor donde volcaré todo el resultado

// Inicializo variables locales para la función

let matrizResultados = capturarResultados();
let nuevaMatrizResultados = new Array;
let contadorAntiFyb = 0;
let contadorCoincidencias = 0;
let contadorDiscrepancias = 0;
let contadorEliminacion = 0;
let contadorHeterocigotas = 0;

let resultadoComparativo = document.createElement("ol");

for (let index = 0; index <= 10; index++) {
    
    // Primer bloque de Condicionales. Convertimos los resultados en + y 0 de tipo String

    if (matrizResultados[index] > 0) {
        nuevaMatrizResultados[index] = "+";
    }
    else {
        nuevaMatrizResultados[index] = "0";
    }

    // Segundo bloque de Condicionales. Solo hace un conteo de positividades para el Antígeno en el Antigrama

    if (Fyb[index] === "+") {
        contadorAntiFyb += 1;
    }

    // Bucle para ayudar a detectar efecto de dosis

    let posibleEfectoDosisFyb;
    for (let i = 0; i <= 10; i++) {
        if ((matrizResultados[i] >= 0) && (matrizResultados[i] <= 2)) {
            posibleEfectoDosisFyb = true;
        }
        else {
            posibleEfectoDosisFyb = false;
        }
    }

    // Tercer bloque de Condicionales. Los contadores que determinarán los resultados.

    let lineaMensaje = document.createElement("li");

    if ((nuevaMatrizResultados[index] === "+") && (Fyb[index] === "+")) {
        contadorCoincidencias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} coincide <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "0") && (Fyb[index] === "+")) {
        if ((Fya[index] === "+") && (posibleEfectoDosisFyb === true)) {
            contadorDiscrepancias += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar porque los antígenos antitéticos son heterocigotos y la positividad
            del resultado no es lo suficientemente potente como para descartarlo<br>`;
            lineaMensaje.style.color = "black";
            contadorHeterocigotas += 1;
        }
        else {
            contadorEliminacion += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide, por lo que Anti-Fyb queda descartado <br>`;
            lineaMensaje.style.color = "black";
        }
    }
    else if ((nuevaMatrizResultados[index] === "+") && (Fyb[index] === "0")) {
        contadorDiscrepancias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar <br>`;
        lineaMensaje.style.color = "black";
    }
    else {
        lineaMensaje.innerHTML = `La célula ${index + 1} es negativa para ambos <br>`;
        lineaMensaje.style.color = "black";
    }

    resultadoComparativo.appendChild(lineaMensaje);
};

console.log("Coincidencias: ", contadorCoincidencias);
console.log("Discrepancias: ", contadorDiscrepancias);
console.log("Eliminación: ", contadorEliminacion);
console.log(nuevaMatrizResultados);

// Aquí voy a preparar el resultado final de esta función

let mensajeFyb = document.createElement("p");

if (contadorEliminacion > 0) {
    mensajeFyb.innerHTML = "Anti-Fyb no se encuentra en el plasma del paciente"
    mensajeFyb.style.color = 'red';
    mensajeFyb.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiFyb) && (contadorDiscrepancias === 0)) {
    mensajeFyb.innerHTML = "Anti-Fyb se ha detectado en el plasma del paciente";
    mensajeFyb.style.color = 'green';
    mensajeFyb.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiFyb) && (contadorDiscrepancias > 0)) {
    mensajeFyb.innerHTML = "Anti-Fyb se ha detectado en el plasma del paciente y no se descarta la existencia de más anticuerpos";
    mensajeFyb.style.color = 'blue';
    mensajeFyb.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias + contadorHeterocigotas) === contadorAntiFyb) {
    mensajeFyb.innerHTML = "El resultado de positividades y resultados negativos en células heterocigotas /FyaFyb/ no descartan la existencia o ausencia de Anti-Fyb";
    mensajeFyb.style.color = 'orange';
    mensajeFyb.style.fontWeight = 'bold';
}

// Construímos el bloque del resultado para esta función. Todo lo que devolverá.

informeFyb.appendChild(resultadoComparativo);
informeFyb.appendChild(mensajeFyb);
informeFyb.style.backgroundColor = 'white';
informeFyb.style.padding = '15px';
informeFyb.style.margin = '3px';
informeFyb.style.border = "solid";
informeFyb.style.borderRadius = '10px';
informeFyb.style.borderColor = "red";

return informeFyb.textContent;

} 

let antiJka = () => {

    let informeJka = document.getElementById("informeJka"); // Capturo el contenedor donde volcaré todo el resultado

// Inicializo variables locales para la función

let matrizResultados = capturarResultados();
let nuevaMatrizResultados = new Array;
let contadorAntiJka = 0;
let contadorCoincidencias = 0;
let contadorDiscrepancias = 0;
let contadorEliminacion = 0;
let contadorHeterocigotas = 0;

let resultadoComparativo = document.createElement("ol");

for (let index = 0; index <= 10; index++) {
    
    // Primer bloque de Condicionales. Convertimos los resultados en + y 0 de tipo String

    if (matrizResultados[index] > 0) {
        nuevaMatrizResultados[index] = "+";
    }
    else {
        nuevaMatrizResultados[index] = "0";
    }

    // Segundo bloque de Condicionales. Solo hace un conteo de positividades para el Antígeno en el Antigrama

    if (Jka[index] === "+") {
        contadorAntiJka += 1;
    }

    // Bucle para ayudar a detectar efecto de dosis

    let posibleEfectoDosisJka;
    for (let i = 0; i <= 10; i++) {
        if ((matrizResultados[i] >= 0) && (matrizResultados[i] <= 2)) {
            posibleEfectoDosisJka = true;
        }
        else {
            posibleEfectoDosisJka = false;
        }
    }

    // Tercer bloque de Condicionales. Los contadores que determinarán los resultados.

    let lineaMensaje = document.createElement("li");

    if ((nuevaMatrizResultados[index] === "+") && (Jka[index] === "+")) {
        contadorCoincidencias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} coincide <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "0") && (Jka[index] === "+")) {
        if ((Jkb[index] === "+") && (posibleEfectoDosisJka === true)) {
            contadorDiscrepancias += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar porque los antígenos antitéticos son heterocigotos y la positividad
            del resultado no es lo suficientemente potente como para descartarlo<br>`;
            lineaMensaje.style.color = "black";
            contadorHeterocigotas += 1;
        }
        else {
            contadorEliminacion += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide, por lo que Anti-Jka queda descartado <br>`;
            lineaMensaje.style.color = "black";
        }
    }
    else if ((nuevaMatrizResultados[index] === "+") && (Jka[index] === "0")) {
        contadorDiscrepancias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar <br>`;
        lineaMensaje.style.color = "black";
    }
    else {
        lineaMensaje.innerHTML = `La célula ${index + 1} es negativa para ambos <br>`;
        lineaMensaje.style.color = "black";
    }

    resultadoComparativo.appendChild(lineaMensaje);
};

console.log("Coincidencias: ", contadorCoincidencias);
console.log("Discrepancias: ", contadorDiscrepancias);
console.log("Eliminación: ", contadorEliminacion);
console.log(nuevaMatrizResultados);

// Aquí voy a preparar el resultado final de esta función

let mensajeJka = document.createElement("p");

if (contadorEliminacion > 0) {
    mensajeJka.innerHTML = "Anti-Jka no se encuentra en el plasma del paciente"
    mensajeJka.style.color = 'red';
    mensajeJka.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiJka) && (contadorDiscrepancias === 0)) {
    mensajeJka.innerHTML = "Anti-Jka se ha detectado en el plasma del paciente";
    mensajeJka.style.color = 'green';
    mensajeJka.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiJka) && (contadorDiscrepancias > 0)) {
    mensajeJka.innerHTML = "Anti-Jka se ha detectado en el plasma del paciente y no se descarta la existencia de más anticuerpos";
    mensajeJka.style.color = 'blue';
    mensajeJka.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias + contadorHeterocigotas) === contadorAntiJka) {
    mensajeJka.innerHTML = "El resultado de positividades y resultados negativos en células heterocigotas /JkaJkb/ no descartan la existencia o ausencia de Anti-Jka";
    mensajeJka.style.color = 'orange';
    mensajeJka.style.fontWeight = 'bold';
}

// Construímos el bloque del resultado para esta función. Todo lo que devolverá.

informeJka.appendChild(resultadoComparativo);
informeJka.appendChild(mensajeJka);
informeJka.style.backgroundColor = 'white';
informeJka.style.padding = '15px';
informeJka.style.margin = '3px';
informeJka.style.border = "solid";
informeJka.style.borderRadius = '10px';
informeJka.style.borderColor = "red";

return informeJka.textContent;

} 

let antiJkb = () => {

    let informeJkb = document.getElementById("informeJkb"); // Capturo el contenedor donde volcaré todo el resultado

// Inicializo variables locales para la función

let matrizResultados = capturarResultados();
let nuevaMatrizResultados = new Array;
let contadorAntiJkb = 0;
let contadorCoincidencias = 0;
let contadorDiscrepancias = 0;
let contadorEliminacion = 0;
let contadorHeterocigotas = 0;

let resultadoComparativo = document.createElement("ol");

for (let index = 0; index <= 10; index++) {
    
    // Primer bloque de Condicionales. Convertimos los resultados en + y 0 de tipo String

    if (matrizResultados[index] > 0) {
        nuevaMatrizResultados[index] = "+";
    }
    else {
        nuevaMatrizResultados[index] = "0";
    }

    // Segundo bloque de Condicionales. Solo hace un conteo de positividades para el Antígeno en el Antigrama

    if (Jkb[index] === "+") {
        contadorAntiJkb += 1;
    }

    // Bucle para ayudar a detectar efecto de dosis

    let posibleEfectoDosisJkb;
    for (let i = 0; i <= 10; i++) {
        if ((matrizResultados[i] >= 0) && (matrizResultados[i] <= 2)) {
            posibleEfectoDosisJkb = true;
        }
        else {
            posibleEfectoDosisJkb = false;
        }
    }

    // Tercer bloque de Condicionales. Los contadores que determinarán los resultados.

    let lineaMensaje = document.createElement("li");

    if ((nuevaMatrizResultados[index] === "+") && (Jkb[index] === "+")) {
        contadorCoincidencias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} coincide <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "0") && (Jkb[index] === "+")) {
        if ((Jka[index] === "+") && (posibleEfectoDosisJkb === true)) {
            contadorDiscrepancias += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar porque los antígenos antitéticos son heterocigotos y la positividad
            del resultado no es lo suficientemente potente como para descartarlo<br>`;
            lineaMensaje.style.color = "black";
            contadorHeterocigotas += 1;
        }
        else {
            contadorEliminacion += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide, por lo que Anti-Jkb queda descartado <br>`;
            lineaMensaje.style.color = "black";
        }
    }
    else if ((nuevaMatrizResultados[index] === "+") && (Jkb[index] === "0")) {
        contadorDiscrepancias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar <br>`;
        lineaMensaje.style.color = "black";
    }
    else {
        lineaMensaje.innerHTML = `La célula ${index + 1} es negativa para ambos <br>`;
        lineaMensaje.style.color = "black";
    }

    resultadoComparativo.appendChild(lineaMensaje);
};

console.log("Coincidencias: ", contadorCoincidencias);
console.log("Discrepancias: ", contadorDiscrepancias);
console.log("Eliminación: ", contadorEliminacion);
console.log(nuevaMatrizResultados);

// Aquí voy a preparar el resultado final de esta función

let mensajeJkb = document.createElement("p");

if (contadorEliminacion > 0) {
    mensajeJkb.innerHTML = "Anti-Jkb no se encuentra en el plasma del paciente"
    mensajeJkb.style.color = 'red';
    mensajeJkb.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiJkb) && (contadorDiscrepancias === 0)) {
    mensajeJkb.innerHTML = "Anti-Jkb se ha detectado en el plasma del paciente";
    mensajeJkb.style.color = 'green';
    mensajeJkb.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiJkb) && (contadorDiscrepancias > 0)) {
    mensajeJkb.innerHTML = "Anti-Jkb se ha detectado en el plasma del paciente y no se descarta la existencia de más anticuerpos";
    mensajeJkb.style.color = 'blue';
    mensajeJkb.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias + contadorHeterocigotas) === contadorAntiJkb) {
    mensajeJkb.innerHTML = "El resultado de positividades y resultados negativos en células heterocigotas /JkaJkb/ no descartan la existencia o ausencia de Anti-Jkb";
    mensajeJkb.style.color = 'orange';
    mensajeJkb.style.fontWeight = 'bold';
}

// Construímos el bloque del resultado para esta función. Todo lo que devolverá.

informeJkb.appendChild(resultadoComparativo);
informeJkb.appendChild(mensajeJkb);
informeJkb.style.backgroundColor = 'white';
informeJkb.style.padding = '15px';
informeJkb.style.margin = '3px';
informeJkb.style.border = "solid";
informeJkb.style.borderRadius = '10px';
informeJkb.style.borderColor = "red";

return informeJkb.textContent;

} 

let antiXga = () => {

    let informeXga = document.getElementById("informeXga"); // Capturo el contenedor donde volcaré todo el resultado

// Inicializo variables locales para la función

let matrizResultados = capturarResultados();
let nuevaMatrizResultados = new Array;
let contadorAntiXga = 0;
let contadorCoincidencias = 0;
let contadorDiscrepancias = 0;
let contadorEliminacion = 0;

let resultadoComparativo = document.createElement("ol");

for (let index = 0; index <= 10; index++) {
    
    // Primer bloque de Condicionales. Convertimos los resultados en + y 0 de tipo String

    if (matrizResultados[index] > 0) {
        nuevaMatrizResultados[index] = "+";
    }
    else {
        nuevaMatrizResultados[index] = "0";
    }

    // Segundo bloque de Condicionales. Solo hace un conteo de positividades para el Antígeno en el Antigrama

    if (Xga[index] === "+") {
        contadorAntiXga += 1;
    }

    // Tercer bloque de Condicionales. Los contadores que determinarán los resultados.

    let lineaMensaje = document.createElement("li");

    if ((nuevaMatrizResultados[index] === "+") && (Xga[index] === "+")) {
        contadorCoincidencias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} coincide <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "0") && (Xga[index] === "+")) {
        contadorEliminacion += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide, por lo que Anti-Xga queda descartado <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "+") && (Xga[index] === "0")) {
        contadorDiscrepancias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar Anti-Xga <br>`;
        lineaMensaje.style.color = "black";
    }
    else {
        lineaMensaje.innerHTML = `La célula ${index + 1} es negativa para ambos <br>`;
        lineaMensaje.style.color = "black";
    }

    resultadoComparativo.appendChild(lineaMensaje);
};

console.log("Coincidencias: ", contadorCoincidencias);
console.log("Discrepancias: ", contadorDiscrepancias);
console.log("Eliminación: ", contadorEliminacion);
console.log(nuevaMatrizResultados);

// Aquí voy a preparar el resultado final de esta función

let mensajeXga = document.createElement("p");

if (contadorEliminacion > 0) {
    mensajeXga.innerHTML = "Anti-Xga no se encuentra en el plasma del paciente"
    mensajeXga.style.color = 'red';
    mensajeXga.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiXga) && (contadorDiscrepancias === 0)) {
    mensajeXga.innerHTML = "Anti-Xga se ha detectado en el plasma del paciente";
    mensajeXga.style.color = 'green';
    mensajeXga.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiXga) && (contadorDiscrepancias > 0)) {
    mensajeXga.innerHTML = "Anti-Xga se ha detectado en el plasma del paciente y no se descarta la existencia de más anticuerpos";
    mensajeXga.style.color = 'blue';
    mensajeXga.style.fontWeight = 'bold';
}

// Construímos el bloque del resultado para esta función. Todo lo que devolverá.

informeXga.appendChild(resultadoComparativo);
informeXga.appendChild(mensajeXga);
informeXga.style.backgroundColor = 'white';
informeXga.style.padding = '15px';
informeXga.style.margin = '3px';
informeXga.style.border = "solid";
informeXga.style.borderRadius = '10px';
informeXga.style.borderColor = "red";

return informeXga.textContent;

}

let antiLea = () => {

    let informeLea = document.getElementById("informeLea"); // Capturo el contenedor donde volcaré todo el resultado

// Inicializo variables locales para la función

let matrizResultados = capturarResultados();
let nuevaMatrizResultados = new Array;
let contadorAntiLea = 0;
let contadorCoincidencias = 0;
let contadorDiscrepancias = 0;
let contadorEliminacion = 0;
let contadorHeterocigotas = 0;

let resultadoComparativo = document.createElement("ol");

for (let index = 0; index <= 10; index++) {
    
    // Primer bloque de Condicionales. Convertimos los resultados en + y 0 de tipo String

    if (matrizResultados[index] > 0) {
        nuevaMatrizResultados[index] = "+";
    }
    else {
        nuevaMatrizResultados[index] = "0";
    }

    // Segundo bloque de Condicionales. Solo hace un conteo de positividades para el Antígeno en el Antigrama

    if (Lea[index] === "+") {
        contadorAntiLea += 1;
    }

    // Bucle para ayudar a detectar efecto de dosis

    let posibleEfectoDosisLea;
    for (let i = 0; i <= 10; i++) {
        if ((matrizResultados[i] >= 0) && (matrizResultados[i] <= 2)) {
            posibleEfectoDosisLea = true;
        }
        else {
            posibleEfectoDosisLea = false;
        }
    }

    // Tercer bloque de Condicionales. Los contadores que determinarán los resultados.

    let lineaMensaje = document.createElement("li");

    if ((nuevaMatrizResultados[index] === "+") && (Lea[index] === "+")) {
        contadorCoincidencias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} coincide <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "0") && (Lea[index] === "+")) {
        if ((Leb[index] === "+") && (posibleEfectoDosisLea === true)) {
            contadorDiscrepancias += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar porque los antígenos antitéticos son heterocigotos y la positividad
            del resultado no es lo suficientemente potente como para descartarlo<br>`;
            lineaMensaje.style.color = "black";
            contadorHeterocigotas += 1;
        }
        else {
            contadorEliminacion += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide, por lo que Anti-Lea queda descartado <br>`;
            lineaMensaje.style.color = "black";
        }
    }
    else if ((nuevaMatrizResultados[index] === "+") && (Lea[index] === "0")) {
        contadorDiscrepancias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar <br>`;
        lineaMensaje.style.color = "black";
    }
    else {
        lineaMensaje.innerHTML = `La célula ${index + 1} es negativa para ambos <br>`;
        lineaMensaje.style.color = "black";
    }

    resultadoComparativo.appendChild(lineaMensaje);
};

console.log("Coincidencias: ", contadorCoincidencias);
console.log("Discrepancias: ", contadorDiscrepancias);
console.log("Eliminación: ", contadorEliminacion);
console.log(nuevaMatrizResultados);

// Aquí voy a preparar el resultado final de esta función

let mensajeLea = document.createElement("p");

if (contadorEliminacion > 0) {
    mensajeLea.innerHTML = "Anti-Lea no se encuentra en el plasma del paciente"
    mensajeLea.style.color = 'red';
    mensajeLea.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiLea) && (contadorDiscrepancias === 0)) {
    mensajeLea.innerHTML = "Anti-Lea se ha detectado en el plasma del paciente";
    mensajeLea.style.color = 'green';
    mensajeLea.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiLea) && (contadorDiscrepancias > 0)) {
    mensajeLea.innerHTML = "Anti-Lea se ha detectado en el plasma del paciente y no se descarta la existencia de más anticuerpos";
    mensajeLea.style.color = 'blue';
    mensajeLea.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias + contadorHeterocigotas) === contadorAntiLea) {
    mensajeLea.innerHTML = "El resultado de positividades y resultados negativos en células heterocigotas /LeaLeb/ no descartan la existencia o ausencia de Anti-Lea";
    mensajeLea.style.color = 'orange';
    mensajeLea.style.fontWeight = 'bold';
}

// Construímos el bloque del resultado para esta función. Todo lo que devolverá.

informeLea.appendChild(resultadoComparativo);
informeLea.appendChild(mensajeLea);
informeLea.style.backgroundColor = 'white';
informeLea.style.padding = '15px';
informeLea.style.margin = '3px';
informeLea.style.border = "solid";
informeLea.style.borderRadius = '10px';
informeLea.style.borderColor = "red";

return informeLea.textContent;

} 

let antiLeb = () => {

    let informeLeb = document.getElementById("informeLeb"); // Capturo el contenedor donde volcaré todo el resultado

// Inicializo variables locales para la función

let matrizResultados = capturarResultados();
let nuevaMatrizResultados = new Array;
let contadorAntiLeb = 0;
let contadorCoincidencias = 0;
let contadorDiscrepancias = 0;
let contadorEliminacion = 0;
let contadorHeterocigotas = 0;

let resultadoComparativo = document.createElement("ol");

for (let index = 0; index <= 10; index++) {
    
    // Primer bloque de Condicionales. Convertimos los resultados en + y 0 de tipo String

    if (matrizResultados[index] > 0) {
        nuevaMatrizResultados[index] = "+";
    }
    else {
        nuevaMatrizResultados[index] = "0";
    }

    // Segundo bloque de Condicionales. Solo hace un conteo de positividades para el Antígeno en el Antigrama

    if (Leb[index] === "+") {
        contadorAntiLeb += 1;
    }

    // Bucle para ayudar a detectar efecto de dosis

    let posibleEfectoDosisLeb;
    for (let i = 0; i <= 10; i++) {
        if ((matrizResultados[i] >= 0) && (matrizResultados[i] <= 2)) {
            posibleEfectoDosisLeb = true;
        }
        else {
            posibleEfectoDosisLeb = false;
        }
    }

    // Tercer bloque de Condicionales. Los contadores que determinarán los resultados.

    let lineaMensaje = document.createElement("li");

    if ((nuevaMatrizResultados[index] === "+") && (Leb[index] === "+")) {
        contadorCoincidencias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} coincide <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "0") && (Leb[index] === "+")) {
        if ((Lea[index] === "+") && (posibleEfectoDosisLeb === true)) {
            contadorDiscrepancias += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar porque los antígenos antitéticos son heterocigotos y la positividad
            del resultado no es lo suficientemente potente como para descartarlo<br>`;
            lineaMensaje.style.color = "black";
            contadorHeterocigotas += 1;
        }
        else {
            contadorEliminacion += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide, por lo que Anti-Leb queda descartado <br>`;
            lineaMensaje.style.color = "black";
        }
    }
    else if ((nuevaMatrizResultados[index] === "+") && (Leb[index] === "0")) {
        contadorDiscrepancias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar <br>`;
        lineaMensaje.style.color = "black";
    }
    else {
        lineaMensaje.innerHTML = `La célula ${index + 1} es negativa para ambos <br>`;
        lineaMensaje.style.color = "black";
    }

    resultadoComparativo.appendChild(lineaMensaje);
};

console.log("Coincidencias: ", contadorCoincidencias);
console.log("Discrepancias: ", contadorDiscrepancias);
console.log("Eliminación: ", contadorEliminacion);
console.log(nuevaMatrizResultados);

// Aquí voy a preparar el resultado final de esta función

let mensajeLeb = document.createElement("p");

if (contadorEliminacion > 0) {
    mensajeLeb.innerHTML = "Anti-Leb no se encuentra en el plasma del paciente"
    mensajeLeb.style.color = 'red';
    mensajeLeb.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiLeb) && (contadorDiscrepancias === 0)) {
    mensajeLeb.innerHTML = "Anti-Leb se ha detectado en el plasma del paciente";
    mensajeLeb.style.color = 'green';
    mensajeLeb.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiLeb) && (contadorDiscrepancias > 0)) {
    mensajeLeb.innerHTML = "Anti-Leb se ha detectado en el plasma del paciente y no se descarta la existencia de más anticuerpos";
    mensajeLeb.style.color = 'blue';
    mensajeLeb.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias + contadorHeterocigotas) === contadorAntiLeb) {
    mensajeLeb.innerHTML = "El resultado de positividades y resultados negativos en células heterocigotas /LeaLeb/ no descartan la existencia o ausencia de Anti-Leb";
    mensajeLeb.style.color = 'orange';
    mensajeLeb.style.fontWeight = 'bold';
}

// Construímos el bloque del resultado para esta función. Todo lo que devolverá.

informeLeb.appendChild(resultadoComparativo);
informeLeb.appendChild(mensajeLeb);
informeLeb.style.backgroundColor = 'white';
informeLeb.style.padding = '15px';
informeLeb.style.margin = '3px';
informeLeb.style.border = "solid";
informeLeb.style.borderRadius = '10px';
informeLeb.style.borderColor = "red";

return informeLeb.textContent;

} 

let antiS = () => {

    let informeS = document.getElementById("informeS"); // Capturo el contenedor donde volcaré todo el resultado

// Inicializo variables locales para la función

let matrizResultados = capturarResultados();
let nuevaMatrizResultados = new Array;
let contadorAntiS = 0;
let contadorCoincidencias = 0;
let contadorDiscrepancias = 0;
let contadorEliminacion = 0;
let contadorHeterocigotas = 0;

let resultadoComparativo = document.createElement("ol");

for (let index = 0; index <= 10; index++) {
    
    // Primer bloque de Condicionales. Convertimos los resultados en + y 0 de tipo String

    if (matrizResultados[index] > 0) {
        nuevaMatrizResultados[index] = "+";
    }
    else {
        nuevaMatrizResultados[index] = "0";
    }

    // Segundo bloque de Condicionales. Solo hace un conteo de positividades para el Antígeno en el Antigrama

    if (S[index] === "+") {
        contadorAntiS += 1;
    }

    // Bucle para ayudar a detectar efecto de dosis

    let posibleEfectoDosisS;
    for (let i = 0; i <= 10; i++) {
        if ((matrizResultados[i] >= 0) && (matrizResultados[i] <= 2)) {
            posibleEfectoDosisS = true;
        }
        else {
            posibleEfectoDosisS = false;
        }
    }

    // Tercer bloque de Condicionales. Los contadores que determinarán los resultados.

    let lineaMensaje = document.createElement("li");

    if ((nuevaMatrizResultados[index] === "+") && (S[index] === "+")) {
        contadorCoincidencias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} coincide <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "0") && (S[index] === "+")) {
        if ((s[index] === "+") && (posibleEfectoDosisS === true)) {
            contadorDiscrepancias += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar porque los antígenos antitéticos son heterocigotos y la positividad
            del resultado no es lo suficientemente potente como para descartarlo<br>`;
            lineaMensaje.style.color = "black";
            contadorHeterocigotas += 1;
        }
        else {
            contadorEliminacion += 1;
            lineaMensaje.innerHTML = `La célula ${index + 1} no coincide, por lo que Anti-S queda descartado <br>`;
            lineaMensaje.style.color = "black";
        }
    }
    else if ((nuevaMatrizResultados[index] === "+") && (S[index] === "0")) {
        contadorDiscrepancias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide pero no se puede descartar <br>`;
        lineaMensaje.style.color = "black";
    }
    else {
        lineaMensaje.innerHTML = `La célula ${index + 1} es negativa para ambos <br>`;
        lineaMensaje.style.color = "black";
    }

    resultadoComparativo.appendChild(lineaMensaje);
};

console.log("Coincidencias: ", contadorCoincidencias);
console.log("Discrepancias: ", contadorDiscrepancias);
console.log("Eliminación: ", contadorEliminacion);
console.log(nuevaMatrizResultados);

// Aquí voy a preparar el resultado final de esta función

let mensajeS = document.createElement("p");

if (contadorEliminacion > 0) {
    mensajeS.innerHTML = "Anti-S no se encuentra en el plasma del paciente"
    mensajeS.style.color = 'red';
    mensajeS.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiS) && (contadorDiscrepancias === 0)) {
    mensajeS.innerHTML = "Anti-S se ha detectado en el plasma del paciente";
    mensajeS.style.color = 'green';
    mensajeS.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias === contadorAntiS) && (contadorDiscrepancias > 0)) {
    mensajeS.innerHTML = "Anti-S se ha detectado en el plasma del paciente y no se descarta la existencia de más anticuerpos";
    mensajeS.style.color = 'blue';
    mensajeS.style.fontWeight = 'bold';
}
else if ((contadorCoincidencias + contadorHeterocigotas) === contadorAntiS) {
    mensajeS.innerHTML = "El resultado de positividades y resultados negativos en células heterocigotas /Ss/ no descartan la existencia o ausencia de Anti-S";
    mensajeS.style.color = 'orange';
    mensajeS.style.fontWeight = 'bold';
}

// Construímos el bloque del resultado para esta función. Todo lo que devolverá.

informeS.appendChild(resultadoComparativo);
informeS.appendChild(mensajeS);
informeS.style.backgroundColor = 'white';
informeS.style.padding = '15px';
informeS.style.margin = '3px';
informeS.style.border = "solid";
informeS.style.borderRadius = '10px';
informeS.style.borderColor = "red";

return informeS.textContent;

} 