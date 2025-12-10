//Write a function that performs the bubble algorithm.
numberList = [3, 6, 12, 5, 100, 1]

for (let i = 0; i < numberList.length; i++) {

    for (let j = 0; j < numberList.length - 1 ; j++) {

        if (numberList[j]>numberList[j+1]){

            let sort = numberList[j]; //sort guarda valor izq valor relativo100
            numberList[j]=numberList[j+1]; //numberlist(indice numero 2) es igual al de la derecha 1
            numberList[j+1]=sort; // valor derecha cambia al valor de la variable sort (izquierda) posicion 5 es igual a lo que guardaste en sort
        } 
        }           
}   
 console.log (numberList)

            
            //j=2
            //numberList = [3, 6, 5, 12, 100, 1]
            //j=4
            //numberList = [3, 6, 5, 12, 1, 100]

        

//numberlist.length=6
        





//Output [1, 3, 5, 6, 12, 100]
