//Objetos

//Los tipo de datos OBJETOS, contienen muchos valores
//llamados Propiedades

//Los objetos pueden tener propiedades que son funciones
//llamados MÉTODOS

let arbol = {
    altura: 10,
    color: "verde",
    crecimiento() {
        this.altura +=2;
    }
};

arbol.crecimiento();
console.log(arbol.altura);


//también puede ser así:

let nombre = "Jorge"
let peso = "70 kg"

let persona = {
    nombre,
    peso
};

console.log(persona.nombre);

//A l crear objetos con la misma propiedad
//seran sobreescritos

var a = {x:1, x:2, x:3, x:4};

console.log(a.x);



//---------Nombre de propieades calculadas
//Sirve para crear nombre de variables

let prop = 'nombre';
let id = '123';
let celular = '959692129';

let usuario = {
    [prop]: 'Jorge',
    [`usuario_${id}`]: `${celular}`
}

console.log(usuario);


var i = 0;
var p = {
    ['algo' + ++i]: i,
    ['algo' + ++i]: i,
    ['algo' + ++i]: i,
    ['algo' + ++i]: i
}

console.log(p);


var param = 'size';
var config = {
    [param]: 12,
    ['mobile' + param.charAt(0).toUpperCase()+param.slice(1)]: 4
}

console.log(config.mobileSize);


//----Método assign()

//Permite combinar multiples fuente en un solo objetivo
// para crear un nuevo objeto unico

let alumno = {
    nombre: 'Jorge',
    edad: 28,
    carrera: "geografía"
}

let individuo = {
    nombre: "Ernesto",
    edad: 24,
    sexo: "masculino"
}


//El primer parametro es el objeto objetivo al cual 
// se le desea aplicar las nueva propiedades
//Los demás son las fuentes, en este caso es un nuevo objeto {}

let nuevoEstudiante = Object.assign({},individuo, alumno)

/**
 * EL orden es importante xq:
 * las propiedades del segundo parámetro serán reemplazadas 
 * por las propiedades del mismo nombre en el tercer parámetro,
 *  y así sucesivamente.
 */
console.log(nuevoEstudiante);

//Esto devuelve: {nombre: "Jorge", edad: 28, 
//sexo: "masculino", carrera: "geografía"}


//-- Si asignaramos de la siguiente manera 
//sobre escribria la referencia

let profesor = {
    nombre: "José",
    materia: "Matemática"
};

let newProfesor = profesor; 
newProfesor.nombre = "Ricardo"

// Al final en ambos se llamaría Ricardo
console.log(profesor.nombre);
console.log(newProfesor.nombre);



//-- Para ello se puede usar assign()

let postulante = {
    nombre: 'Julio',
    edad: 36
};

let newPostulante = Object.assign({}, postulante);
newPostulante.nombre = 'Veronika';

console.log(postulante.nombre);
console.log(newPostulante.nombre);

//-- esto también se puede dar dentro

let newPostulante2 = Object.assign({}, postulante,
    {nombre: 'Hernando'});

console.log(newPostulante2.nombre);



// Eejercicio
const obj1 = {
    a:0,
    b:2,
    c:4
}

const obj2 = Object.assign({c:5, d:6}, obj1);

console.log(obj2.c, obj2.d);


//-------- Destructuración

let edades = [3, 2, 1];
let [tres, dos, uno] = edades;

console.log(tres);
console.log(dos);


// SE puede incluso destructurar un array proveniente de una funcion

let r = () => {
    return ["a", "b", "c"];
};

let [letra1, ,letra3] = r();

console.log(letra1);
console.log(letra3);



///---- Destructuracion de objetos
let objeto = {
    altura: 100,
    ancho: 50
}

let {altura, ancho} = objeto;

console.log(altura);
console.log(ancho);


//-- otra manera
//-- Los parentesis son necesarios  con el ";"
let k, j;

({k, j} = {k: "Hola ", j: "Jorge"});

console.log(k + j);

//Pero hacer esto es lo mismo
let {f, g} = {f: "Qué ", g: "tal?"}
console.log((f+g));


//Se puede tambien cambiar los nombres
var frutas = {manzana: 3, peras: 5, platano: 8};
var {manzana: sandia, peras:mangos, platano:fresas} = frutas;


console.log(mangos);
console.log(frutas);


//Asignar avlores por defecto a variables cuando no hay
//Por ejm acá pasamos valores, pero no longutyd así q toma por defecto

var rios = {gid: 001, nombrerio: "Rimac"};

let {gid = 10, longitud = 500} = rios;

console.log(gid);
console.log(longitud);


//ES6 Rest Parameters

//Sirve para pasar un numero determinador de variables de argumentos
const mostrarDatos = (...datos) =>{
    // Pasamos de estoo: console.log(nombre, edad, sexo); a esto
    console.log(datos);
}

mostrarDatos("Jorge", 28, "Masculino")


//El SPREAD es al revés
const mostrarDatos2 = (a, b, c) => {
    console.log(a+b+c);
}

const datoArreglo = [44, 30];
mostrarDatos2(...datoArreglo, 4)


//Otro ejempli
var fechaCampos = [1992, 12, 17]
var fecha = new Date(...fechaCampos);
console.log(fecha);

//Spread in array
let newNumeros = ["tres", "cuatro"]
let numeros = ["Uno", "dos", ...newNumeros, "Cinco"];
console.log(numeros);

//Spread in objects
const obj001 = {algo: "bar", x:43};
const obj002 = {algo: "taberna", y:55}

const clonarobjeto = {...obj001};
console.log(clonarobjeto);

const mergeObjeto = {...obj001, ...obj002};
console.log(mergeObjeto);