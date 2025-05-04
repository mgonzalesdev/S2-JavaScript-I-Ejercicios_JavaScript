// Ejercicio 1.1: Arrow functions
// Ejercicio 1: Funcion flecha para sumar dos numeros
const sumar = (a, b) => a + b;

// Ejercicio 2
//Función flecha sin parámetros devuelve un número aleatorio entre 0 y 100.
const randomNumber = () => Math.floor(Math.random() * 101);

// Ejercicio 3
// Uso de 'this' funcion flecha: Crea una clase person que tenga una propiedad name 
// y una función greet que utilice una función de flecha para imprimir un saludo que incluya el nombre de la persona. 
// Por ejemplo: console.log(Hola, ${this.name});.
import { Person } from "./person.js"
var person = new Person("Mariela");
person.greet();

console.log(sumar(10, 5));
console.log(randomNumber());

// Ejercicio 4
// Función de flecha dentro de un loop: Crea una función llamada printNumbers que acepte un array de números y 
// utilice un loop for para imprimir cada número en la consola utilizando una función de flecha.
function printNumbers(numbers) {
    numbers.forEach(num => console.log(num));
}
let numeros = [1, 2, 3, 4, 5];
printNumbers(numeros);

// Ejercicio 5
// Función de flecha que imprime un mensaje en la consola después de esperar 3 segundos.('setTimeout')
setTimeout(() => { console.log("Hola") }, 3000)

// Ejercicio 1.2: Operador ternario
// Ejercicio 1
// Funcion que devuele si un usuario puede o no conducir de acuerdo a su edad.
function puedeConducir(edad) {
    return edad >= 18 ? "Puedes conducir" : "No puedes conducir";
}
console.log(puedeConducir(30));
console.log(puedeConducir(17));

// Ejercicio 2
// Uso con operadores de comparación: Escribe una expresión para determinar cuál de los dos números dados (num1 y num2) es mayor. 
// Si num1 es mayor, devuelve 'num1 es mayor'. Si no, devuelve 'num2 es mayor'.
let num1 = 8;
let num2 = 10;
let result = num1 > num2 ? num1 + " es mayor" : num2 + " es mayor";
console.log(result);

// Ejercicio 3
// Escribe una expresión que utilice enlaces de operadores ternarios para determinar si un número es positivo, negativo o cero.
// Crea una función encontrarMaximo que acepte tres parámetros (a, b, c) y utilice el operador ternario para determinar el valor máximo.
let x = 10;
const num = x > 0 ? "Numero positivo" : (x < 0 ? "Numero negativo" : "Cero");
console.log(num);

function encontrarMaximo(a, b, c) {
    return a > b ?
        (a > c ? a : c) :
        (b > c ? b : c);
}
console.log(encontrarMaximo(9, 4, 2));
console.log(encontrarMaximo(9, 15, 3));
console.log(encontrarMaximo(9, 4, 20));

// Ejercicio 4
//  Escribe una función parOImpar que acepte un array de números.
//  Dentro del bucle, utiliza el operador ternario para determinar si cada número es par o impar.
function esParImpar(numbers) {
    numbers.forEach(number =>console.log(number % 2 == 0 ? number + " Es par" : number + " Es impar"));
}
esParImpar([1, 2, 3, 4, 6, 8, 7, 9]);

