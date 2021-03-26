/**
 * Operadores aritmeticos:
 * +: suma
 * -: resta
 * *: multiplicacion
 * /: division
 * /: modulus
 * ++:incemento    
 * --:Decremento
 */


let y = 23 + 5;
document.write(y)


let x = 23 + 23 + 43+ 45 + 4 + 54
document.write(x)

// Obtener el resultado de un string
let z = eval("10*5")
console.log(z)

// Multiplicando-------------------
let w = 1000 * 100000
console.log(w)

// casos raros
w = '23' * 100000
console.log(w)

w = '23' * '23'
console.log(w)


// Division ---------------
w = 43434 / 2
console.log(w)

// Infinito???
w = 43434 / 0
console.log(w)


// Modulus --------- Retonar el residuo

w = 38 % 5
console.log(w)


// Incremento - Decremento ------------
// El post es asigna el valor 
 x = 10            
var b = x++    // asigna valor a b y luego x se incrementa a 11
console.log(x)
console.log(b)

y=15
var c = ++y
console.log(y) // Incrementa y, luego le da el valor a c 
console.log(c) 


// Operadores de asignacion -------------------
/**
 * +=    x+=y -> x = x + y
 * -=    x-=y -> x = x-y
 * %=    x%=  -> x = x % y
 */

 w = 38
 w += 2
 console.log(w)


 // Operadores de comparacion --------------------
 w = 55
 w >30

/**  
 * == Igual a
 * === Identico a (Igual y del mismo tipo)
 * != No igual
 * !== No identico
 * >= mayor o igual
 * <= menor o ugal
 */


//  Operadores logicos -------------
/** 
 * && -- > && Verdadero si ambos son verdaderos
 * || --> verdadero si un operador es verdadero
 * ! --> retona lo opuesto
 * */ 

// Condicional ternario
// variable = (condition) ? value1:value2
// Si se cumple la condicion ? entonces value1 sino value2

w = 5
console.log(w > 30 ? "mayor a 30" : "menor de 30");


// Operaciones String ----

// Concatenacion 

w = "Me gusta "
z = "dormir"

console.log(w + z)

w = "4"
z = "5"

console.log(w + z) // esto da 45

