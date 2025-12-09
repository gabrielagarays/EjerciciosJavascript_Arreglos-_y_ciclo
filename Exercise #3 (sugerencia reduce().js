
//Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.

//declare array numbersList 
let numbersList = [10, 20, 40, 50];

// Funciones arrow con 2 parametros: acumulador y n (elemento actual del array)
//use .reduce para recorrer el array y obtener la suma (empezando en 0)
const sum = numbersList.reduce((acumulador, n) => acumulador + n, 0);
//use .reduce para recorrer el array y obtener la multiplicacion (empezando en 1)
const product = numbersList.reduce((acumulador, n) => acumulador * n, 1);

// Imprimir resultados
console.log("El resultado de la suma es:", sum);       // 10
console.log("El resultado de la multiplicacion es:", product); // 24