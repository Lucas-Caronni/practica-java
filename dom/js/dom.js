// ej a
alert("Bienvenidos a mi sitio!");

// ej b
let confirmacion = confirm("¿Está seguro de querer avanzar?");
let saludoElement = document.querySelector('.saludo');
if (confirmacion) {
    saludoElement.textContent = "Qué alegría que quieras continuar tu visita.";
} else {
    saludoElement.textContent = "Lamentamos que no quieras continuar tu visita.";
    // opcion para que no siga el flujo del ejercicio. No se ejecutan mas ejs
    throw new Error("El usuario no quiere continuar.");
}
// ej c
let nombreUsuario = prompt("Por favor, ingrese su nombre:")
// ej d
let bienvenidaElement = document.getElementById('bienvenida')
bienvenidaElement.textContent = "Bienvenido " + nombreUsuario;
// ej e
let edad = prompt("¿Cuántos años tenés?");
edad = parseInt(edad);
let containerGeneral = document.querySelector('.container-general');
let accesoDenegado = document.getElementById('accesoDenegado');
if (edad > 17){
    containerGeneral.style.display = "block";

} else {
    containerGeneral.style.display = "none";
    accesoDenegado.style.display = "block";
}
// ej f
document.addEventListener('DOMContentLoaded', function() {
    let leGustaProgramacion = confirm("¿Te gusta la programación?");
    let divBackgroundImg = document.querySelector('.background-img');
    let img = document.createElement('img');
    if (leGustaProgramacion) {
        img.src = 'img/programmer.jpeg';
    } else {
        img.src = 'img/gatito.jpeg';
    }
    divBackgroundImg.appendChild(img);
});

// ej g

document.addEventListener('DOMContentLoaded', function() {
    let avatarImg = document.querySelector('.avatar');
    let nuevaImagenUrl = prompt("Por favor, ingrese la URL de la nueva imagen:");
    if (avatarImg && nuevaImagenUrl) {
        avatarImg.src = nuevaImagenUrl;
    }
});

// en caso que quisiera que solo se muestre la foto que se porporciona en el url, deberia cambiar la secuencia de los eventos. 

// ej h ej i (juntos, van de la mano)

let pelicula = {
    nombre: "",
    director: "",
    duracion: 0,
    actor: ""
};

pelicula.nombre = prompt("Ingrese el nombre de su película favorita:");
pelicula.director = prompt("Ingrese el nombre del director de la película:");
pelicula.duracion = Number(prompt("Ingrese la duración de la película en minutos:"));
pelicula.actor = prompt("Ingrese el nombre del actor principal de la película:");

console.log(`Información de la película favorita del usuario:\nNombre: ${pelicula.nombre}\nDirector: ${pelicula.director}\nDuración: ${pelicula.duracion} minutos\nActor Principal: ${pelicula.actor}`);

// ej j

document.getElementById("nombre").textContent = `Nombre: ${pelicula.nombre}`;
document.getElementById("director").textContent = `Director: ${pelicula.director}`;
document.getElementById("duracion").textContent = `Duración: ${pelicula.duracion} minutos`;
document.getElementById("actor").textContent = `Actor Principal: ${pelicula.actor}`;

// ej k
document.querySelector("#pelicula ul").style.display = "block";
