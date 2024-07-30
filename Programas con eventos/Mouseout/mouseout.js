let input = document.getElementById("miInput");

function mensaje(){
    console.log('El ratón entró en el area del input y salió fuera');
}

input.addEventListener('mouseout', mensaje);