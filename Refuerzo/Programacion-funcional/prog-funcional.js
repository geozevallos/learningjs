//Arreglos

//------------------- FILTER ----------------------

//Crear un arreglo de igual o menor cantidad de arreglos
//Solo una parte. Devuelve un arreglo nuevo (Inmutable)

const numeros = [1,2,3,4,5,6,7,8,9]


const mascotas = [
    {nombre: "Duquesa", edad: 5, raza: "Criollo"},
    {nombre: "Fido", edad: 6, raza: "Criollo"},
    {nombre: "Pirata", edad: 2, raza: "Pitbull"},
    {nombre: "Rex", edad: 3, raza: "Criollo"}
];


//Crea un arreglo completamente nuevo
const numerosFiltrados = numeros.filter(x => x > 3);
console.log(numerosFiltrados);

//Razas criollas:
//Deuelve el objeto completo
const criollos = mascotas.filter(x => x.raza === "Criollo")
console.log(criollos);


//---------------------MAP --------------------------------

//Permita transformar los elemenots del arreglo. 
// creará un NUEVO arreglo con  la misma cantidad de elementos
//Sirve para aplicar una función a los elementos del arreglo

const multiplicados = numeros.map(x => x * 2)
console.log(multiplicados);

//Quiero un arreglo sol o de las edades de los perros
const edades = mascotas.map(x => x.edad);
console.log(edades);


//---------------------Reduce --------------------------------
//Funciones reducer
//Recibe 2 elementos: 
//1ero: valor acumulado 2do: Elemento interando
//Devuelve el nuevo elemento acumulando
//const reducer = (acumulador, valorActual) => nuevoACumulador;

const resultado = numeros.reduce((acc, el) => acc + el, 0);

console.log(resultado);



const indexed = mascotas.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el,
}), {});

console.log(indexed);
console.log(indexed['Fido']);


const anidado = [1, [2,3], 4, [5]];

const plano = anidado.reduce((acc, el) => acc.concat(el), [])