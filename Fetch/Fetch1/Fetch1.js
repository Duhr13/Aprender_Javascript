// Este es un ejemplo de Fetch no funcional con PUT

function agregarRegistro(identificador){
    fetch('https://api.restful-api.dev/objects/' + identificador, {
        method: 'PUT',
        headers: {
            "Content-Type": "aplication/json"
        },
        body: JSON.stringify({
            name: nombre
        })
    })
    .then(respuesta => respuesta.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}