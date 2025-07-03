// 1. Escribe un comentario en una línea

//Respuesta:Este es un comentario en una sola linea

// 2. Escribe un comentario en varias líneas

/*
este es
un comentario
en varias lineas 
de codigo
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myNameIs = "Juan"
let myEgeIs = 22
let isStudent = true
let isMyValueNull = null
let isMyBigInt = 12555688897755866622552511n
let MySymbolIs = Symbol("symbol")
let valueUndefined = undefined

// 4. Imprime por consola el valor de todas las variables
console.log(myNameIs)
console.log(myEgeIs)
console.log(isStudent)
console.log(isMyValueNull)
console.log(isMyBigInt)
console.log(MySymbolIs)
console.log(valueUndefined)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myNameIs)
console.log(typeof myEgeIs)
console.log(typeof isStudent)
console.log(typeof isMyValueNull)
console.log(typeof isMyBigInt)
console.log(typeof MySymbolIs)
console.log(typeof valueUndefined)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myNameIs = "Carlos"
myEgeIs = 20
isStudent = false
isMyValueNull = undefined
isMyBigInt = BigInt(11252556698875554452656)
MySymbolIs = Symbol("second symbol")
valueUndefined = null

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myNameIs = 23
myEgeIs = "MereTrili"
isStudent = "yes"
isMyValueNull = 255663
isMyBigInt = 22300
valueUndefined = "Definido"
MySymbolIs = null

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const nombre = "Juan 2"
const edad = 22
const estudiante = true
const valorNull = null
const valorBigInt = BigInt(122255569998775588526262654515415451)
const valorIndefinido = undefined
const simbolo = Symbol("este es un simbolo")

// 9. A continuación, modifica los valores de las constantes
/*
nombre = "Juan 3"
edad = 24
estudiante = false
valorNull = true
valorBigInt = BigInt(1451554575745612984515151151654848487853)
valorIndefinido = "hola mundo"
simbolo = 3433
*/


// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse