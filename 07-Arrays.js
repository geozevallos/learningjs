// Un array permite guardar disttintos valores
let curso1 = "QGIS";
let curso2 = "ArcGIS";
let curso3 = "PostGIS";

let cursos = new Array("QGIS", "ArcGIS", "PostGIS");

console.log(cursos);

// Ingresando a un array
// Los arrays empiezan en 0
let cursoGIS = cursos[0];
console.log(cursoGIS);

cursos[2] = "GvSIG";
console.log(cursos[2]);

// Si buscamos un index fuera del array devuelve undefined

console.log(cursos[4]);

// Creando arrays

let mascotas = new Array(4);
mascotas[0] = "Pirata";
mascotas[1] = "Duquesa";
mascotas[2] = "Lazzy";
mascotas[3] = "Duko";

console.log(mascotas);

// UN array es considerado también un tipo especial de objecto

//Otra manera de crear un array es sin pasar nada en el constructor

let frutas = new Array();
frutas[0] = "Piña";
frutas[1] = "Cereza";
frutas[2] = "Mandarina";

console.log(frutas);

// Otra manera: Literal array (Es la manera recomendada de crear arreglo) ****

let colores = ["verde", "azul", "morado"];
console.log(colores);

//Propiedades y metodos del array
//length

console.log(colores.length);

//Uniendo arrays
//Ojo q lo devuelve en un nuevo array
let frutaColor = colores.concat(frutas);
console.log(frutaColor);

// JS no soporta arrays con indexes nmobrados. Arrays usan indices numericos
//Tratando un array como objeto:
var persona = [];
persona["nombre"] = "Jorge";
persona["edad"] = 28;
console.log(persona["edad"]);

//Los objetos permiten indexar por texto, mientras q el array por numero

/** El objeto Math ****************************************************
 * Permite realizar operacinoes matemática
 * No tiene constructor, no se neceista crear un objeto math
 */

console.log(Math.PI);

//Arcocoseno
console.log(Math.acos(-1));

//ArcoSeno
console.log(Math.asin(1));

//ceil (Retorna redondeado al valor superio)
console.log(Math.ceil(4.1));

//floor (Retorna reondeado al nivel inferior)
console.log(Math.floor(2.9));

//Valor máximo
console.log(Math.max(4, 2, 60, 33));

//Valor minimo
console.log(Math.min(2, 5, 7, 1));

//pow (Potenciado a; o sea en este ejemplo 10 elevado al cubo)
console.log(Math.pow(10, 3));

//Valor random entre 0 y 1
console.log(Math.random());

//Redondea al valor más próximoo
console.log(Math.round(10.6));
console.log(Math.round(9.1));

//La raiz cuadrada
console.log(Math.sqrt(81));

// var num = prompt("Entra un número", "");
// var respuesta = Math.sqrt(num);
// alert(`La raíz cuadrada de ${num} es ${respuesta}`);

/** El objeto Date ****************************************************
 * Permite trabajar con fechas (Año, mes, dia, hora, minuto ,segundo)
 * Las fechas son estáticas, no dinámicas
 */

// setInterval, llama a un función o evalua una expresion
//en un itntervalo determinado (en milisegundos: 1000ms = 1segundo)
//No se detendrá hasta cerra la ventana o usar el clearinterval();

// function miAlerta() {
//     alert("hola :)")
// }

// setInterval(miAlerta, 3000)

//Almacenará la fecha actual
var f = new Date();
console.log(`la fecha de hoy es ${f}`);

//new Date (milisegundos)
var ms = new Date(4125000000);
console.log(ms);

//new Data (dateString)
var ds = new Date("November 17, 1992 01:15:00");
console.log(ds);

//new Date(año, mes, dia, hora, minutos, segundos, milisegndos)
//Los meses empiezan a contarse desde 0
var fecha = new Date(92, 10, 17, 01, 30, 13, 15000);
console.log(fecha);

// Métodos Date *********************************

//Obtener el año (Ya tengo mi variable f con la fecha actyal)
console.log(f.getFullYear());

// Obtener el mes
console.log(f.getMonth());

//Obtener el dia del mes
console.log(f.getDate());

//Obtener el día de la semana -- El domingo es 0
console.log(f.getDay());

//Obtener la hora
console.log(f.getHours());

//Obtener los minutos
console.log(f.getMinutes());

//Obtener los segundos
console.log(f.getSeconds());

//Obtener los milisegundos
console.log(f.getMinutes());

//Un reloj
function mostrarHorasxMinuto() {
  let fecha = new Date();
  let hora = fecha.getHours();
  let mins = fecha.getMinutes();
  let seg = fecha.getSeconds();

  document.body.innerHTML = `${hora}:${mins}:${seg}`;
}

setInterval(mostrarHorasxMinuto, 1000);

/** 
 * Store Manager


You are working on a Store Manager program, which stores the prices in an array.
You need to add functionality to increase the prices by the given amount.
The increase variable is taken from user input. You need to increase all the prices in the given array by that amount and output to the console the resulting array.
*/
function main() {
  var increase = parseInt(readLine(), 10);
  var prices = [98.99, 15.2, 20, 1026];
  //your code goes here
  let precios = [];
  prices.forEach((precio) => {
    precios.push(precio + increase);
  });
  console.log(precios);
}
