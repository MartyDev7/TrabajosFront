// 1. Crea una variable para cada operación aritmética
//aritmeticos
let a = 10
let b = 62

let suma
suma = a + b
console.log("La suma es: " + suma)

let resta
resta = a - b
console.log("La resta es: " + resta)

let multiplicacion
multiplicacion = a * b
console.log("La multiplicacion es: " + multiplicacion)

let division
division = a / b
console.log("la division es: " + division)

let modulo
modulo = a % b
console.log("El módulo restante es: " + modulo)

let exponente
exponente = a**b
console.log("El exponente de: " + a + " a la " + b +" es: " + exponente)


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let newVariable = 15
newVariable += suma
console.log("The new summation variable is: " + newVariable)

newVariable -= resta
console.log("The new subtraction variable is: " + newVariable)

newVariable *= multiplicacion
console.log("The new multiplication variable is: " + newVariable)

newVariable /= division
console.log("The new division variable is: " + newVariable)

newVariable %= modulo
console.log("The new module variable is: " + newVariable)

newVariable **= exponente
console.log("The new exponent value is: " + newVariable)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log("Operadores de comparacion")

c = "32"
console.log(a < c)
console.log(a != c)
newVariable = c
console.log(c == newVariable)
console.log(32 !== c)
console.log(!(a == b))

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a == b)
console.log(c > b)
console.log(a >= c)
console.log(b === a)
console.log(c === a)

// 5. Utiliza el operador lógico and
console.log("and")
console.log(a >= b && c < b)


// 6. Utiliza el operador lógico or
console.log("or")
console.log(a == b )

// 7. Combina ambos operadores lógicos

// 8. Añade alguna negación

// 9. Utiliza el operador ternario

// 10. Combina operadores aritméticos, de comparáción y lógicas