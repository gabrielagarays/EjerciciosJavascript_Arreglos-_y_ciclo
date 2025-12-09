//For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//Write a command that prints out all of the people in the list.
console.log("La lista inicial es:", people);
//Write the command to remove "Dani" from the array.
let peopleNoDani = people.splice(1, 1);
console.log("Sin Dani:", people);
//Write the command to remove "Juan" from the array.
let peopleNoJuan = people.splice(2, 1);
console.log("Sin Juan:", people);
//Write the command to move "Luis" to the front of the array.
//splice para eliminar a Luis de su posicion actual y guardarlo en una variable
let luis = people.splice(1, 1);
//unshift para agregar a Luis en la posicion 0 del array
people.unshift(luis[0]);
console.log("Luis posicion 0:", people);
//Write the command to add your name to the end of the array.
people.push("Gabriela");
console.log("Con mi nombre al final:", people);
//Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
// bucle for para recorrer el array people
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
// CONDICION. si la persona en la posicion i es estrictamente igual a Maria
    if (people[i] === "Maria") {
//"break" para salir del bucle    
        break;
    }
}   

//Write the command that gives the indexOf where "Maria" is located.
let indexMaria = people.indexOf("Maria");
console.log("El index de Maria es:", indexMaria); 

//Imprime el array final
console.log("El array final es:", people);

