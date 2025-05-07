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
let numeros = [1, 2, 3, 4];
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
    numbers.forEach(number => console.log(number % 2 == 0 ? number + " Es par" : number + " Es impar"));
}
esParImpar([1, 2, 3, 4, 9]);

// Ejercicio 1.3: Callbacks
// Nivel 1 Ejercicio 1
// Callback básico: Escribe una función llamada procesar que acepte dos parámetros: un número y una función de callback.
// La función procesar debe invocar la función de callback, pasando el número como parámetro.
function imprimirNumero(numero) {
    console.log("Imprimiendo un numero desde callback " + numero);
}

function procesar(num, callback) {
    callback(num);
}
procesar(5, imprimirNumero);

// Ejercicio 2
// Callbacks con operaciones matemáticas: Escribe una función calculadora que acepte tres parámetros: dos números y una función de callback.
// La función calculadora debe invocar la función de callback con los dos números como parámetros.
// Luego, llama calculadora con una función que realice la suma de los dos números.
function suma(a, b) {
    return a + b;
}
function calculadora(a, b, callback) {
    let rest = callback(a, b);
    console.log("La suma es: " + rest);
}
calculadora(10, 5, suma);

// Nivel 2 Ejercicio 3
// Uso de callbacks en funciones asíncronas: Escribe una función esperarISaludar que acepte dos parámetros: un nombre y una función de callback.
// La función debe esperar 2 segundos y entonces invocar la función de callback, pasando el nombre como parámetro.
function saludo(nombre) {
    console.log("Hola " + nombre);
}
function esperarISaludar(nombre, fn) {
    setTimeout(fn(nombre), 2000);
}
esperarISaludar("Mariela", saludo);

// Ejercicio 4 Callbacks con arrays: Escribe una función procesarElements que acepte dos parámetros: un array y una función de callback.
// La función procesarElements debe invocar la función de callback por cada elemento del array.
function mostrarElemento(elemento) {
    console.log(elemento);
}

function procesarElements(elementos, fn) {
    for (let i = 0; i < elementos.length; i++) {
        fn(elementos[i]);
    }
}
let frutas = ['naranja', 'limon', 'manzana', 'banana']
procesarElements(frutas, mostrarElemento);

function procesar1(elementos, fn) {
    elementos.forEach(element => fn(element));
}
let verduras = ["apio", "lechuga"];
procesar1(verduras, mostrarElemento);
// Nivel 3 Ejercicio 5
// Escribe una función procesarCadena que acepte dos parámetros: una cadena de caracteres y una función de callback.
// La función procesarCadena debe convertir la cadena a mayúsculas y entonces invocar la función de callback con la cadena transformada.
function mostrarFrase(frase) {
    console.log(frase);
}

function procesarCadena(frase, fn) {
    console.log("Frase inicial: " + frase);
    frase = frase.toUpperCase();
    fn(frase);
}
procesarCadena("curso de programacion", mostrarFrase);

// Ejercicio 1.4: Rest & Spread operators
// Nivel 1 Ejercicio 1
// Operador Spread en Arrays: Crea dos arrays, array1 y array2. Use el operador spread para crear una tercera array que contenga todos 
// los elementos de array1 y array2.
const array1 = [2, 4, 6, 8, 10];
const array2 = [1, 3, 5, 7, 9];
const array3 = [...array1, ...array2];
console.log(array3);

// Ejercicio 2
// Operador Rest en Funciones: Crea una función 'suma' que utilice el operador rest para aceptar un número indeterminado de argumentos y devolver su suma.
function adicion(...numeros) {
    let resultado = 0;
    numeros.forEach(num => { resultado += num });
    return resultado;
}
console.log(adicion(1, 2, 3, 4, 5, 6));

// Nivel 2 Ejercicio 3
// Copiando objetos con Spread: Crea un objeto 'objeto1'. Luego crea un segundo objeto, 'objeto2', que sea una copia de 'objeto1' utilizando
//  el operador spread. Cambia una propiedad de 'objeto2' y comprueba que 'objeto1' no ha cambiado.
const objeto1 = {
    nombre: "Mariela",
    apellido: "Gonzales",
    edad: 35
}
const objeto2 = { ...objeto1 }
objeto2.edad = 37;
console.log(objeto1);
console.log(objeto2);
// Ejercicio 4
// Resto en Destructuring: Crea un array con varios elementos. Utiliza destructuring y el operador resto para asignar los primeros dos 
// elementos a variables, y después asignar el resto de los elementos a una tercera variable.
const lenguajes = ["PHP", "JS", "Java", "Python", "C++"];
const [primerElem, segundoElem, ...otrosLenguajes] = lenguajes;

console.log(lenguajes);
console.log(primerElem);
console.log(segundoElem);
console.log(otrosLenguajes);

// Nivel 3
// Ejercicio 5
// Spread en Funciones: Crea una función que acepte tres argumentos. Después, crea un array con tres elementos y llama a la 
// función utilizando el operador spread con esa array.

function multiplicar(a, b, c) {
    return a * b * c;
}
let numrs = [2, 4, 6];
console.log(multiplicar(...numrs));

// Ejercicio 6
// Fusionando Objetos con Spread: Crea dos objetos con propiedades distintas. 
// Utiliza el operador spread para fusionar estos dos objetos en uno nuevo.

const infoPersonal = { nombre: "Mariela", apellido: "Gonzales" };
const infoAuxiliar = { direccion: "Sants, Barcelona", cp: "08028", telf: 123456 };
const persona = { ...infoPersonal, ...infoAuxiliar }

console.log(infoPersonal);
console.log(infoAuxiliar);
console.log(persona);

// Ejercicio 1.5: Array transformations
// Nivel 1 Ejercicio 1
// Map: Tiene un array de números [1, 2, 3, 4]. Crea un nuevo array que contenga el cuadrado de cada número.
const arrayNum1 = [1, 2, 3, 4, 5, 6];
const cuadrado = arrayNum1.map(numero => Math.pow(numero, 2));
console.log(cuadrado);

// Ejercicio 2
// Filtero: Tiene un array de números [1, 2, 3, 4]. Crea un nuevo array que sólo contenga los números pares.
const numerosPares = arrayNum1.filter(numero => numero % 2 === 0);
console.log(numerosPares);

// Ejercicio 3
// Find: Tiene un array de números [1, 10 , 8, 11]. Use la función find para encontrar el primer número que es mayor a 10.
let arrayNum3 = [1, 10, 8, 11];
let mayor = arrayNum3.find((element) => element > 10);
console.log(mayor);

// Ejercicio 4
// Reducción: Tiene un array de números [13, 7, 8, 21]. Utiliza la función reduccion para calcular la suma total de los números.
let arrayNum4 = [13, 7, 8, 21];
let sum = arrayNum4.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(sum);

// Nivel 2 Ejercicio 5
// Dado un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una función en una sola línea que haga lo siguiente:
// - Filtra los números mayores o iguales a 10.
// - Multiplica cada número filtrado por 2.
// - Calcula la suma de los números filtrados y multiplicados por 2.
// - La función debe devolver el resultado de la suma.
let arrayNum5 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
let sum1 = arrayNum5.filter(numero => numero >= 10).map(numero => numero * 2).reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum1);

// Nivel 3 Ejercicio 6
// Every / Some: Usa every y some para determinar si todos o algunos de los elementos del array [11, 12, 13, 14] son ​​mayores que 10, respectivamente
let arrayNum6 = [11, 12, 13, 14];
let todosMayoresDiez = arrayNum6.every(numero => numero >= 10);

let algunMayorDiez = arrayNum6.some(numero => numero >= 10);
console.log(todosMayoresDiez);
console.log(algunMayorDiez);

// Ejercicio 1.6: Array loops
// Nivel 1 Ejercicio 1
// forEach: Tiene un array de nombres. Utiliza forEach para imprimir cada nombre en la consola: let nombres = ['Anna', 'Bernat', 'Clara'];
let nombres = ['Anna', 'Bernat', 'Clara'];
nombres.forEach(nombre => console.log(nombre));

// Ejercicio 2
// for-of: Tiene un array de nombres. Utiliza un bucle for-of para imprimir cada nombre en la consola: let noms = ['Anna', 'Bernat', 'Clara'];
let noms = ['Anna', 'Bernat', 'Clara'];
for (const nom of noms) {
    console.log(nom);
}
// Ejercicio 3
// filtro: Tiene un array de números. Use filtro para crear una nueva array que sólo contenga los números pares. let numeros = [1, 2, 3, 4, 5, 6];
let numerosEjercicio3 = [1, 2, 3, 4, 5, 6];
let numPares = arrayNum1.filter(numero => numero % 2 === 0);


// Nivel 2 Ejercicio 4
// for-in: Tiene un objeto con pares clave-valor: let obj = { nombre: Ola, edad: 25, ciudad: 'Barcelona' }; Use un bucle for-in para imprimir en la consola cada clave y su valor correspondiente.
let obj = { nombre: 'Ola', edad: 25, ciudad: 'Barcelona' }
for (const key in obj) {
    console.log("Clave: " + key + ", Valor: " + obj[key]);
}

// Ejercicio 5
// for-of con break: Tiene un array de números. Utiliza un bucle for-of para imprimir en la consola los números hasta encontrar el número 5, 
// entonces detiene el bucle: 
let numerosEjercicio5 = [1, 2, 3, 4, 5, 6];
for (const num of numerosEjercicio5) {
    if (num === 5)
        break;
    console.log(num);
}

// Nivel 3 Ejercicio 6
// for-of con index: Utiliza un bucle for-of para imprimir en la consola cada elemento del array y su posición (index): let noms = ['Anna', 'Bernat', 'Clara']
let nomsEjercicio6 = ['Anna', 'Bernat', 'Clara'];
for (const [index, value] of nomsEjercicio6.entries()) {
    console.log("Indice:" + index + ", Valor: " + value);
}

