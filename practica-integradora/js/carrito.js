// recupero localStorage
let recuperoStorage = localStorage.getItem("carItems")

let lista = document.querySelector(".lista")
// pregunto si hay algo en storage
if(recuperoStorage == null){
    // parseo
    let mensaje = "Tu Carrito esta vacio"
    let empty = document.querySelector(".empty")
    empty.innertext = mensaje
} else {
    carrito = [];
    carrito = JSON.parse(recuperoStorage);
    for (let i = 0;i < array.lengt i++) {
        const element = array;
        
    }

}