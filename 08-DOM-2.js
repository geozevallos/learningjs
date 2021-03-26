let a = document.getElementById("prueba")

console.log(a.childNodes);


console.log(a.firstChild);

console.log(a.lastChild);

console.log(a.nextSibling);

/**
 * Modificando atributos
 */

let imagen = document.getElementById("miImagen");
imagen.src = "https://place-hold.it/500x300"

let enlace = document.getElementById("enlace");
console.log(enlace);
enlace.href = "https://www.facebook.com"

/**
 * Modificando le estilo
 * -----
 * Cualquier estilo CSS puede ser modificado
 * En lugar de utilizar "-" para los nombres de las propiedades 
 * Se utiliza camelCase
 */

let estilos = document.getElementById("modificando");
estilos.style.backgroundColor = "blue";
estilos.style.width = "500px";



/**
 * CREANDO ELEMENTOS
 */

// cloneNode() -> Clona un elemento y retorna el resultado del node
//createElement() -> Crea un nuevo elemento
//createTextNode() -> Crea un nuevo text node

let p = document.createElement("p");
let tnode = document.createTextNode("Lorem")

p.appendChild(tnode);

estilos.appendChild(p);


//Insertar un elemento antes
let p2 = document.createElement("p")
p2.innerText = "Esto insertar antes";

estilos.insertBefore(p2, p)

//Remover un elemento
let pr = document.getElementById("remover")
estilos.removeChild(pr);

//Ahora reemplazar
let reemp = document.getElementById("reemplazar")
let p3 = document.createElement("p")
p3.innerText = "Esto es un reemplazo";
//(nuevo,antiguo)
estilos.replaceChild(p3, reemp)