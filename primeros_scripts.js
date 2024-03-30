"strict mode"

/*
  Programa que escribe por consola los cien primeros números.
  Si es divisible entre 3 escribir Fizz.
  Si es divisible entre 5 escribir Buzz.
  Si es divisible entre 3 y 5 escribir FizzBuzz.

  La resolución ha sido un éxito.
*/

/* for (let cont = 1; cont <= 100; cont++){
    if ((cont % 3 == 0) && (cont % 5 != 0)){
        console.log("Fizz");
    }
    else if ((cont % 5 == 0) && (cont % 3 != 0)){
        console.log("Buzz");
    } 
    else if ((cont % 3 == 0) && (cont % 5 == 0)){
        console.log("FizzBuzz");
    }
    else{
        console.log(cont);
    }
} */

//---------------------------------------------------------------------------------- //
// -------------------------- Scripts distintos ------------------------------------ //
//---------------------------------------------------------------------------------- //


/*
    Este programa consiste en generar un tablero de ajedrez de num*num alternando blancas y negras con espacios y almohadillas.

    La resolución ha sido un éxito.
*/



/* num = 8;
for (i = 1; i<=num; i++){
    resultado = "";                             // Utilizo una variable para acumular string porque por cada console.log es una línea nueva.
    for (j = 1; j<= num; j++){                  // Uso un bucle dentro de otro para poder generar un bucle bidimensional que recorra un num * num.
        if ((i + j) % 2 == 0){                  // Aquí sumo los dos contadores y calculo su resto (par o impar) para poder generar el tablero asimétrico.
            resultado = resultado + " ";
        }
        else{
            resultado = resultado + "#";
        }
    }
    console.log(resultado);
} */

//---------------------------------------------------------------------------------- //
// -------------------------- Scripts distintos ------------------------------------ //
//---------------------------------------------------------------------------------- //