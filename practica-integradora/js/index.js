console.log("index.js");

let url = "https://rickandmortyapi.com/api/character"

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data); //Mostrame por consola.
        let info = data.results; //Array de datos que vino de la API
        //Paso1: capturar elemento del DOM
        let lista = document.querySelector('.lista');
        let elementosLista = ''

        //Paso 2 bsucar los datos y actualizar el paso1, no hay otra opcion que esto, si hay un array, necesitamos un 'for'. Se agrega a elemento lista que estaba vacio.
        // La variable 'elementosLista' es contenido de Lista, una seccion, esta en el html index donde esta <section class "lista">
        for(let i=0; i<info.length; i++){
            elementosLista += `<article>
                                <img src=${info[i].image}>
                                <p>Nombre: ${info[i].name}</p>
                                <p>Status: ${info[i].status}</p>
                                <a href="detalle.html?id=${info[i].id}">Ver más</a>
                            </article>`
        }
        // el signo de pregunta en la linea 23 significa 'por string'. El primer id es la llave (texto para el querystring), lo que viene desp es dinamico, id por personaje.
        // html?id=${info[i].id} --> esto lo vemos en la url al final cuando apreto uno de los articulos. Vendria a ser la identificacion del articulo.
        console.log(elementosLista);

        //Paso 3: reinviar datos actualizados al DOM, este es el container
        lista.innerHTML = elementosLista;

    })
    .catch(function(error){
        console.log(error);
    })