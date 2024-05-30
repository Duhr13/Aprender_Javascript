'strict mode'

function pelicula(genero) {
    let edad = Number(document.getElementById("edad").value);

    // El siguiente if es una instrucción para evitar errores.

    if (isNaN(edad) || edad < 0) {
        alert('Lo que has introducido no es un número');
        location.reload(); //Con esto recargamos la página.
    }

    let genSelec = document.getElementById("pelirecomendada");

    switch(genero) {
        case 'ficcion':
            if (edad < 18) {
                genSelec.textContent = "Película para menores de 18 años";
            }
            else
            {
                genSelec.textContent = "Película para mayores de 18 años";
            }
        break;
        case 'comedia':
            if (edad < 18) {
                genSelec.textContent = "Película para menores de 18 años";
            }
            else
            {
                genSelec.textContent = "Película para mayores de 18 años";
            }
        break;
        case 'fantasia':
            if (edad < 18) {
                genSelec.textContent = "Película para menores de 18 años";
            }
            else
            {
                genSelec.textContent = "Película para mayores de 18 años";
            }
        break;
    }
}