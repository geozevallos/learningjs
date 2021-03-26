//Eventos comunes


/**
 * onclick => Ocurre cuando el usuario clickea un elemento
 * onload => Ocurre cuando un objeto a cargado
 * onunload => ocurre una vez que una pagina ha descargado (para <body>)
 * onchange => Ocurre cuando el contenido del formulario,
 *             los estados de seleccion o el check ha cambiado
 *             (Para input, keygen, select y textarea)
 * onmouseover => ocurre cuando el pnuto es movido sobre
 *                 un elemento o uno de sus hijos
 * onmouseout => Ocurre cuando un usuario mueve el puntero del mouse
 *              fuera de un elemento o fuera de uno de sus hijos
 * onmousedown => ocurre cuando el usuario presiona el boton
 *                  del mouse sobre un elemento
 * onmouseup => ocurren cuando un usuario libre el boton del mouse sobre
 *              un elemento
 * onblur => ocurre cuando un elemento pierde el enfoque
 * onfocus => ocurre cuando un elemento
 */

// Algunos eventos pueden ser agregados al HTML
// <p onclick="Alguna funcion">AAAA</p>


// Mandar alerta cuando el usuario hace clic


function abrir () {
    alert("Holaaaa!")
};

var x = document.getElementById("prueba");
x.onclick = function () {
    document.body.innerHTML = Date();
}

function fcolor (){
    document.body.style.backgroundColor = "red"
}

// //o usar:
// window.onload = function () {
//     document.body.innerText = "GAAA"
// }


// onchange *******************
//Convirtiendo a mayúscula
function cambio () {
    var y = document.getElementById("nombre");
    y.value = y.value.toUpperCase();
}



// Event Listeners

/**
 * Este método adjunta un controlador de eventos
 * a un elemento, sin sobreesccribir los controladores
 * de eventos existentes. 
 * Se puede agregar muchos controladores de 
 * eventos a un elemento. Incluso del mismo tipo
 * Por ejm: dos eventos click
 */

//element.addEventListener(event, function, useCapture);

/**
 * El primero parámetro es el tipo de evento (ejemplo click o mousedown)
 * El segundo parameto es la funcion a la cual queremos llamar
 * cuando el evento ocurra.
 * El tercer parámetro es un valor booleano q especifica si
 * usarr el evento bubbling o catpturing. (este paraémtro 
 * es opcional)
 */

// No se usa el prefijo on

let elistener = document.getElementById("elistener");

elistener.addEventListener("click", myFunction)
elistener.addEventListener("mouseover", myFunction2)




function myFunction() {
    alert ("Qué fue?")
}

function myFunction2() {
    alert ("Dame clic")
}

// Remover un evento
elistener.removeEventListener("mouseover", myFunction2)


//Vamos a agregarle una función y q al hacer clic se elimine
let remover = document.getElementById("remover");

remover.addEventListener("click", funcion3)
function funcion3 () {
    alert(Math.random());
    remover.removeEventListener("click", funcion3)
}


/***
 * Propagación de evento en el DOM HTML -------
 * Bubbling y Capturing
 * 
 * Determina que evento se da primero por ejemplo
 * cuando tienes eventos de un elemento contenidos en otro
 * Ejm: un p dento de un div
 * 
 * 
 * Bubbling: El elemento más interno se ejecuta primero.
 * ejm: el elemento p se ejecutaría primero luego el del div
 * 
 * Capturing: primero es más "saliente" y luego el otro
 * 
 */


// Un valor false, indica que el bubbling es usado,
//Cuando el valor es establecido a true, usa el capturing

let capture = document.getElementById("capture");
let bubble = document.getElementById("bubble");

bubble.addEventListener("click", myFunction2, false)

capture.addEventListener("click", myFunction, true)
