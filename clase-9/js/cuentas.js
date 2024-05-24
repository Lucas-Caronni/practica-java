// Haciendo Cuentas 

let num1 = prompt("Por favor, ingresa el primer número:");
let num2 = prompt("Ahora, por favor, ingresa el segundo número:");

num1 = parseInt(num1);
num2 = parseInt(num2);


function multiplicar(num1, num2) {
    let resultado = num1 * num2;
    return `El resultado de la multiplicacion de ${num1} y ${num2} es: ${resultado}`;
}

console.log(multiplicar(num1, num2));




