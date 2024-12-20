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
    
    let resultadoPanelC = capturarResultados();
    validacionResultadosPanel();
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

function validacionResultadosPanel() {
    let resultadoPanelC = capturarResultados();

    for (let index of resultadoPanelC) {
        while ((isNaN(index)) || (index < 0) || (index > 4)) {
            return alert("Introduce un valor correcto que debe ser 0, 0.5, 1, 2, 3 o 4");
        }
    }
}

// Función para resolver el panel C. Voy a intentar usar la sintaxis de EcmaScript 6

let informefinal = () => {

    antiD();
    antiC();
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

    // Tercer bloque de Condicionales. Los contadores que determinarán los resultados.

    let lineaMensaje = document.createElement("li");

    if ((nuevaMatrizResultados[index] === "+") && (C[index] === "+")) {
        contadorCoincidencias += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} coincide <br>`;
        lineaMensaje.style.color = "black";
    }
    else if ((nuevaMatrizResultados[index] === "0") && (C[index] === "+")) {
        contadorEliminacion += 1;
        lineaMensaje.innerHTML = `La célula ${index + 1} no coincide, por lo que Anti-D queda descartado <br>`;
        lineaMensaje.style.color = "black";
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

// Construímos el bloque del resultado para esta función. Todo lo que devolverá.

informeC.appendChild(resultadoComparativo);
informeC.appendChild(mensajeC);
informeC.style.backgroundColor = 'white';
informeC.style.padding = '15px';

return informeC.textContent;

} 