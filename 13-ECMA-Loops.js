//Loops in JS

//For in ... Para iterar sobre las llaves enumerada
// de un objeto
//Si corres un array, deevolvería un índice

let obj = {
    a: 1,
    b: 2,
    c: 3
}

for (const v in obj) {
console.log(v);
        
}

//for of
let nombres = ["ana", "maria", "jorge"]
for (const nombre of nombres) {
    console.log(nombre);
}

//tambi+en funciona con string
for (let x of "Jorge"){
    console.log(x);
}


// *********************FUNCIONES*******************

//Por lo general la funcion es

// function add (a, b) {
//     var sum = a + b;
//     console.log(sum);
// }

//Con Es6 se gnera una nueva sintaxys

const add = (a, b) => {
    let sum = a + b;
    console.log((sum));
}

add(1,3)


//Otra manera
const saludo = x => console.log("Bienvenido " + x);   

saludo("Jorge");

//Si no hubiera parámetro sería parentesis vacías

const alerta = () => console.log("Holaaa");

alerta();


//Es util usando ForEach
var arreglo = [23, 25, 53, 54, 21];

arreglo.forEach(function(elem) {
    console.log(elem + 2);
})

//Puede ser simplicado a:
arreglo.forEach(elem => {
    console.log(elem +2);
})


//VAriables pre definidas

function prueb(a, b=40, c=10){
    return a + b + c;
};

console.log(prueb(55));

//Lo mismo sería con una función flecha

const prueba = (a, b=3, c=2) => {
    return a + b + c
}

console.log((prueba(1)));