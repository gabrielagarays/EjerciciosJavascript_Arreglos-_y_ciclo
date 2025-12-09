//Exercise #1 (sugerencia: join())

//variable arr que contiene strings 
const arr = ["This", "is", "a", "sentence."];
//Inicia la función printOutString 
function printOutString() {
//la variable arrString une en una sola string con join pero separada con espacios
const arrString = arr.join(" "); 
//imprime lo que resulta del arrString con join
console.log(arrString);
}

printOutString();
