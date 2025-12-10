//declare el array numbersList 
let numbersList = [10, 20, 40, 50];
//declare la función doubleValues que recibe el array numbersList
function doubleValues(numbers) {   
//.map devuelve un nuevo array en donde indicamos una nueva funcion num 
return numbers.map(function(num) {
//que multiplica por 2 cada numero del array numbersList
return num * 2;
});
}
//imprime el resultado de llamar a la función doubleValues con numbersList
console.log(doubleValues(numbersList));
