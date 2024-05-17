//Ejercicio 2b

let nombre = prompt("Por favor, ingresa tu nombre:");

console.log(nombre);

// 2c

let edad = prompt("Por favor, ingresa tu edad");

console.log(edad)

// 2d

let mensaje = "Te gustan los deportes?"

let fanDeportes = confirm(mensaje)

console.log(mensaje) 
    alert(`Muchas gracias ${nombre}`)

// 2e

const usuario = {
    nombre: nombre,
    edad: edad,
    fanDeportes: fanDeportes,
    deportistaProfesional: function(){
        if(this.fanDeportes){
            return "Si, soy fan de los deportes";
        } else {
            return "No soy tan fan de los deportes"
        }
    }

}
console.log(usuario.deportistaProfesional())

// 2f





