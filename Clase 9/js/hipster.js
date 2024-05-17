// A
let nacionalidad = prompt("Por favor, ingresa tu nacionalidad:");
let profesion = prompt("Ahora, por favor, ingresa tu profesión:");
let kmsRecorridos = prompt("Finalmente, ingresa cuántos kilómetros caminas por día:");
kmsRecorridos = parseInt(kmsRecorridos);

// B
function filosofoHipster(nacionalidad, profesion, kmsRecorridos) {
    if ((nacionalidad === "Argentino" || nacionalidad === "argentino") && (profesion === "filosofo" || profesion === "músico") && kmsRecorridos >= 2) {
        return "Soy un filósofo hipster";
    } else {
        return "Aún no soy filósofo hipster";
    }
}
console.log(filosofoHipster(nacionalidad, profesion, kmsRecorridos));
