window.addEventListener('load', function() {

    // Capturar HTML
    //ej 1 titulo
    let titulo = document.getElementById('titulo');
    //ej 2 saludo
    let saludo = document.getElementById('saludo')
    //ej 4 bienvenida
    let span = document.querySelector('.bienvenida span');
    // ej 5, entran bienvenida y personajes
    let bienvenida = document.querySelector('.bienvenida');
    let personajes = document.querySelector('.personajes');
    //ej 8 boton
    let boton = document.querySelector('.boton');


 
    // Asignar evento mouseover al título
    titulo.addEventListener('mouseover', function() {
        let nombre = prompt("¿CÓMO TE LLAMÁS?");
        console.log("Nombre ingresado: ", nombre);
        if (nombre && nombre.trim() !== ""){
            saludo.textContent = `BIENVENID@ ${nombre.toUpperCase()}`;
        } else {
            saludo.textContent = "BIENVENID@";
        }
        //ej 3
        saludo.style.textTransform = 'uppercase';

        // para coultar el titulo y mostrar la etiqueta span
        titulo.style.display = 'none';
        span.style.display = 'inline';

    });
    span.addEventListener('click', function() {
        // Ocultar la sección bienvenida
        bienvenida.style.display = 'none';

        // Mostrar la sección personajes
        personajes.style.display = 'flex';
    });
    // Asignar evento click al botón
boton.addEventListener('click', function() {
    // Capturar todos los elementos seleccionados
    let personajesSeleccionados = document.querySelectorAll('.personaje-seleccionado');

    // Mostrar por consola los elementos seleccionados
    console.log("Personajes seleccionados:");
    personajesSeleccionados.forEach(function(personaje) {
        console.log(personaje);
    });
});

    // ej 6, capturo cada personaje
    let bart = document.getElementById('bart');
    let lisa = document.getElementById('lisa');
    let homero = document.getElementById('homero');
    let marge = document.getElementById('marge');
    let maggie = document.getElementById('maggie');
    let milhouse = document.getElementById('milhouse');
    let burns = document.getElementById('burns');
    let bobPatinio = document.getElementById('bobPatinio');
    let flanders = document.getElementById('flanders');
    let duffman = document.getElementById('duffman');
    let gorgory = document.getElementById('gorgory');
    let nelson = document.getElementById('nelson');

     // Asignar eventos a cada personaje

    // Click para Bart, Homero, Milhouse, Nelson
    bart.addEventListener('click', function() {
        bart.classList.toggle('personaje-seleccionado');
    });
    homero.addEventListener('click', function() {
        homero.classList.toggle('personaje-seleccionado');
    });
    milhouse.addEventListener('click', function() {
        milhouse.classList.toggle('personaje-seleccionado');
    });
    nelson.addEventListener('click', function() {
        nelson.classList.toggle('personaje-seleccionado');
    });

    // Doble click para Lisa, Bob Patiño, Duffman
    lisa.addEventListener('dblclick', function() {
        lisa.classList.toggle('personaje-seleccionado');
    });
    bobPatinio.addEventListener('dblclick', function() {
        bobPatinio.classList.toggle('personaje-seleccionado');
    });
    duffman.addEventListener('dblclick', function() {
        duffman.classList.toggle('personaje-seleccionado');
    });

    // Mouse para for Marge, Burns, Flanders, Gorgory
    marge.addEventListener('mouseenter', function() {
        marge.classList.add('personaje-seleccionado');
    });
    marge.addEventListener('mouseleave', function() {
        marge.classList.remove('personaje-seleccionado');
    });
    burns.addEventListener('mouseenter', function() {
        burns.classList.add('personaje-seleccionado');
    });
    burns.addEventListener('mouseleave', function() {
        burns.classList.remove('personaje-seleccionado');
    });
    flanders.addEventListener('mouseenter', function() {
        flanders.classList.add('personaje-seleccionado');
    });
    flanders.addEventListener('mouseleave', function() {
        flanders.classList.remove('personaje-seleccionado');
    });
    gorgory.addEventListener('mouseenter', function() {
        gorgory.classList.add('personaje-seleccionado');
    });
    gorgory.addEventListener('mouseleave', function() {
        gorgory.classList.remove('personaje-seleccionado');
    });

    // Mouse saliendo para Maggie
    maggie.addEventListener('mouseleave', function() {
        maggie.classList.toggle('personaje-seleccionado');
    });
   
    function alternarSeleccion(personaje) {
        if (personaje.classList.contains('personaje-seleccionado')) {
            personaje.classList.remove('personaje-seleccionado');
        } else {
            personaje.classList.add('personaje-seleccionado');
        }
    }

});
