let miArray = [5, 7, 8, "hola", 5, 6];

function mostrarValor(){
    let cont = 0;
    let longitud = miArray.length;
    for (let index of miArray){
        if (cont === (longitud - 1)){ //Debo restar uno a la longitud del array porque las matrices comienzan por 0.
            document.write(index);
        }
        cont++;
    }
}