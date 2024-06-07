//Pasos para QS
let qs = location.search; //Obtener la qs de la url
let qsto = new URLSearchParams(qs); //Transformar la qs en un Objeto Literal
let id = qsto.get('id'); //Obtener el dato de id del objeto literal. qsto = query string to object

//Armar un nuevo fetch
let url = `https://rickandmortyapi.com/api/character/${id}`

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // console.log(data);

        //Paso 1: capturar DOM.
        let title = document.querySelector('h1');
        let image = document.querySelector('img');
        let status = document.querySelector('.status');
        let especie = document.querySelector('.especie');

        //Paso 2 y 3: actualizar datos y actualizar DOM;
        title.innerText = data.name;
        image.src=data.image;
        status.innerText += data.status;
        especie.innerText += data.species;      

    })
    .catch(function(error){
        console.log(error);
    })

    //primer ejercicio, creo un array para ir completando con los datos
    let carrito = [];
    //recupero storage
    let recuperoStorage = localStorage.getItem ("cartItems")
    // pregunto si hay algo en el storage
    if(recuperoStorage != null){
        //parseo
        let recStrgParse = JSON.parse(recuperoStorage)
        carrito = recStrgParse
        // se puede escribir tambien como --> carrito = JSON.parse(recuperoStorage)

    }
    // lo guardo en el array
    
    let fav = document.querySelector(".fav")

    fav.addEventListener ("click", function(e){
        e.preventDefault();
        carrito.push(id)
         // lo convierto en string para guardarlo en storage
         let carStr = JSON.stringify(carrito)
         localStorage.setItem("carItems", carStr)
         console.log("carrito: ", carrito);
         console.log("localStorage: ", localStorage);
    })
        
       
    
    
    