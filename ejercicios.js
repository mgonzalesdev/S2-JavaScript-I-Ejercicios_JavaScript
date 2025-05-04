//Nivel 1
//Ejercicio 1: Funcion flecha para sumar dos numeros
const sumar = (a, b) => a + b;

//Ejercicio 2
//Función flecha sin parámetros devuelve un número aleatorio entre 0 y 100.
const randomNumber = () => Math.floor(Math.random() * 101);

//Ejercicio 3
// Uso de 'this' funcion flecha: Crea una clase person que tenga una propiedad name 
// y una función greet que utilice una función de flecha para imprimir un saludo que incluya el nombre de la persona. 
// Por ejemplo: console.log(Hola, ${this.name});.
import { Person } from "./person.js"
var person = new Person("Mariela");
person.greet();

console.log(sumar(10, 5));
console.log(randomNumber());

//Nivel 2 - Ejercicio 4
//Función de flecha dentro de un loop: Crea una función llamada printNumbers que acepte un array de números y 
// utilice un loop for para imprimir cada número en la consola utilizando una función de flecha.
function printNumbers(numbers) {
    numbers.forEach(num => console.log(num));
}
let numeros = [1, 2, 3, 4, 5];
printNumbers(numeros);

// Nivel 3 - Ejercicio 5
// Función de flecha que imprime un mensaje en la consola después de esperar 3 segundos.('setTimeout')
setTimeout(() => { console.log("Hola") }, 3000)