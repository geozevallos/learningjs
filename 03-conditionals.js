// Condicionales

//  If ---------------------
/** 
 * if (condicion){
 * statement
 * }
 */

// Sentencia verdadera
let dia = "viernes"

if (dia === "viernes"){
    // alert("Hoy se bebe!!!");
    console.log("Hoy se bb");
}



// Sentencia verdadera
if (dia === "jueves"){
    // alert("Hoy se bebe!!!");
    console.log("Hoy se bb");
}



//  else ---------------------
/** 
 * if (expresion){
 * ejecutado si la condicion es verdadera 
 * } else{
 * ejecutado si la condicion es falsa}
 */
let edad = 17

if (edad > 18){
    console.log("Puedes beber");
} else{
    console.log("No puedes beber");  
}


console.log(edad > 18 ? "Puedes beber" : "No puedes beber");


// else if  
let ruta = "b"

if (ruta === "a"){
    console.log("Esta ruta toma 5 min")
} else if (ruta === "b"){
    console.log("Esta ruta toma 15 min");
} else {
    console.log("Esta ruta te lleva al infierno jeje");
} 


// --------SWitch------------------------------
/*   Evalua en cada caso
Con el break especificamos q de cumplir la condicion
solo se ejecute esa parte del codigo

El default es para cuando no se encuentre alguna coincidencia
Puede ser omitido si  es q es conveniente

switch (expression){
    case n1:
        statement
        break;
    case n2:
        statement
        break;
    default:
        statements
}
*/

let diaSemana = 3

switch(diaSemana){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miercoles")
        break;
    default:
        console.log("Es otro dia de la semana");
}



let frutas = "manzana"

switch(frutas){
    case "peras":
        console.log("10 soles");
        break;
    case "platano":
        console.log("5 soles")
        break;
    case "manzana":
        console.log("12 soles")
        break;
    default:
        console.log("No hay stock");
}


