// Este es un ejemplo de Fetch no funcional con DELETE

function agregarRegistro(identificador){
    fetch('https://api.restful-api.dev/objects/' + identificador, {
        method: 'DELETE',
        headers: {
            "Content-Type": "aplication/json" 
        },
        body: JSON.stringify({
            name: nombre
        })
    })
    .then(respuesta => respuesta.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
}