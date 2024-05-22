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


