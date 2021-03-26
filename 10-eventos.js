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
}

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
