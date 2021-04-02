/**
 * Formas de declarar variables
Cual va a elegir va a depende del scope
El scope define la visibilidad de una variable
*/

var a = 10;

let c = true;

const b = "hello";

//var define una variable globalente o localmente a una función
//completa independientemente del alcance del bloque



//Let permite declarar variables q tiene un alcance limitado al bloque,
//declaración o expresión en la q se usan
//Por ello, esto generaría un error
// if(true){let nombre = "Jorge"}

// alert(nombre);


//El var puede ser reemplazado, 
// function PruebaVar(){
//     var x = 1;
//     if (true) {
//         var x = 2 
//         console.log(x);
//     }
//     console.log(x);
// }

// PruebaVar();

//LOs let viven en su scope
// function Probandolet(){
//     let x = 1;
//     if (true) {
//         let x =2;
//         console.log(x);
//     }
//     console.log(x);
// }

// Probandolet();


//¿Cuando sería conveniente usar un let?

//En los loops, ya que el i solo vive en ese scope

for(let i = 0; i < 3; i++){
    console.log(i);
}


// ---------const
/**
 * Tiene el mismo scope como las variables declaradas usando let
 * Es INMUTABLE: No es reasignado
 */

// Esto mostraría una excepcion xq no puede ser reasignada la variable
// const a = "Hola, bebé"
// a = "adios, bebe"


//Incorporar variables como texto
console.log(`El valor de a es ${a}`);