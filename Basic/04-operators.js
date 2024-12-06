//operadores

//aritmeticos
let a = 5
let b = 20
console.log(5+10) //suma
console.log(a+b) //suma
console.log(a-b) //resta
console.log(a*b) //multiplicacion
console.log(a/b) //division

console.log(a%b) //modulo, residuo
console.log(a**b) //exponente

a++ //incremento uno por uno
console.log(a)

b-- //decremento uno por uno
console.log(b)


// Operadores de asignacion
console.log("Operadores de asignacion")
let myVariable = 20 //asignacion simple
console.log(myVariable)
myVariable += 2 //suma el valor asignado más lo que tenia en memoria
console.log(myVariable)
myVariable -= 2
console.log(myVariable)
myVariable *= 2
console.log(myVariable)
myVariable /= 2
console.log(myVariable)
myVariable %= 2
console.log(myVariable)
myVariable **= 2
console.log(myVariable)  

/*
surge una redundancia porque en vez que siga siendo el mismo 20
el nuevo número que se está haciendo es el resultado de la operacion anterior.
Por ejemplo, el exponente resultado es 0 porque el módigo que es la anterior
sale 0, quiere decir que seria 0 al cuadrado, en vez, que sea el cuadrado de 20.
*/

//Operadores de comparación
console.log(a > b) //mayor que
console.log(a < b) //menor que


