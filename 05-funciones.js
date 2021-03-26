// Las funciones son un bloque de codigo a ser realizado 
// una tarea particular. Usar el codigo varias veces

// Se ejecuta cuando la invoca o llama
// Los nombres de las funciones son similares a las variables

/** 
 * function nombredelafuncion(){
 * codigo a ser ejecutado
 *  }
 */

function miFuncion(){
    alert("Llamando a la función")
}

// miFuncion();


// llamando otra vez
// miFuncion();


// Las funciones pueden tomar parametros
/**
 * function nombre (param1, param2, param3){
 * codigo a ejecutarse
 * }
 */

function saludo(nombre){
    console.log("Hola " + nombre);
}

saludo("Jorge")
saludo("Yanet")
saludo("Reyna")

// Es importante proveer los argumentos en el mismo nombre
// Además de no definir un parámetro, JS lo ejecuta, asignando la variable
// como undefined
function datosBasico(nombre, edad){
    console.log(`${nombre} tiene ${edad} años de edad`);
}

datosBasico("Ana", 30)
datosBasico("Maria", 18)



//--- El statement RETURN
// Retorna un valor de la función
// Cuando JS alcanza el return, la función deja de ejecutarse

function retornoMultiplicacion(a,b){
    return a * b;
}

let c = retornoMultiplicacion(5,4);
console.log(c);


// Sino se aplica un return, se almacena como undefined
function divisionPrueba(a, b){
   console.log(a / b);
}

let j = divisionPrueba(40, 10);
console.log(j);



function sumaPrueba(a, b){
    let d = a + b;
    return d;
}

console.log(sumaPrueba(5,20));


// -------------Alert, Prompt - Confirm ---------------

// Alert box---------------------------------
/**
 * Usado para asegurarte que la información es obtenida por el usuario
 * Debe hacer clic para proceder
 */

alert("Quieres casarte conmigo? \nDi que sí")

// Prompt box -------------------------------
/**
 * Usado para q el usuario ingrese un valor antes de entrar a la pagina
 * El usuario puede aceptar o cancelar.
 * De aceptar retorna un valor como input, sino retorna un null
 * 
 * 2 parametros: la etiqueta, y el valor default de la caja de texto (opcional)
 */

let nombre = prompt("¿Cómo te llamas?")
alert(nombre)

// Confirm---------------------------------
/**
 * El usuario puede decidir ok o cancel
 * De poner ok retorna un TRUE
 * De poner cancel un FALSE
 */

let resultado = confirm("Quieres casarte conmigo?");
if (resultado === true){
    alert("La mejor decisión de tu vida")
} else {
    alert("Estás segura? :c")
}