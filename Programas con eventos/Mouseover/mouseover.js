let input = document.getElementById("miInput");

function mensaje(){
    console.log('El ratón está encima del input');
}

input.addEventListener('mouseover', mensaje);