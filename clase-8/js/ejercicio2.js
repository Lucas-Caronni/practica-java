const misDatos = {
    nombre: "Lucas",
    apellido: "Caronni",
    dni: "44367118",
    comidasFavoritas: ["Asado", "Sushi", "Milanga"]
};
console.log(misDatos);

const misDatos1 = {
    nombre: "Lucas",
    apellido: "Caronni",
    dni: "44367118",
    edad: "21",
    comidasFavoritas: ["Asado", "Sushi", "Milanga"],
    saludar: function (){
        return `Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años. Mi primer comida favorita es ${this.comidasFavoritas[0]}.`;}
};
console.log(misDatos1.saludar());

const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2022,
    color: "Rojo",
    posicion: 0,
    avanzar: function(n) {
        if (n > 0) {
            this.posicion += n;
        } else {
            console.log("El valor de n debe ser positivo.");
        }
    },
    retroceder: function(n) {
        if (n > 0) {
            this.posicion -= n;
        } else {
            console.log("El valor de n debe ser positivo.");
        }
    }
};

auto.avanzar(5);
auto.retroceder(2);
auto.avanzar(3);

console.log("La posición final del auto es:", auto.posicion);

const nuevoAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2022,
    color: "Rojo",
    posicion: 0,
    moverse: function(n) {
        if (n > 0) {
            this.posicion += n;
        } else if (n < 0) {
            this.posicion -= Math.abs(n);
        } else {
            console.log("El valor de n debe ser distinto de cero.");
        }
    }
};

nuevoAuto.moverse(5);
nuevoAuto.moverse(-2);
nuevoAuto.moverse(3);

console.log("La posición final del auto es:", nuevoAuto.posicion);

const ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(index) {
        if (index >= 0 && index < this.poderes.length) {
            this.energia -= 10;
            return `Poder Elegido de ${this.nombre}: ${this.poderes[index]}. Energía restante: ${this.energia}.`;
        } else {
            return "El índice proporcionado no es válido.";
        }
    }
};

const Hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(index) {
        if (index >= 0 && index < this.poderes.length) {
            this.energia -= 10;
            return `Poder Elegido de ${this.nombre}: ${this.poderes[index]}. Energía restante: ${this.energia}.`;
        } else {
            return "El índice proporcionado no es válido.";
        }
    }
};


function simularBatalla() {
    const numAleatorio = Math.floor(Math.random() * 3); 
    
    console.log("¡Comienza la batalla!");
    console.log("Número aleatorio para los poderes:", numAleatorio);
    
    console.log(ironMan.getPoder(numAleatorio));
    console.log(Hulk.getPoder(numAleatorio));
    console.log(ironMan.getPoder(numAleatorio));
    console.log(Hulk.getPoder(numAleatorio));
    console.log(ironMan.getPoder(numAleatorio));
    console.log(Hulk.getPoder(numAleatorio));
}

simularBatalla();
