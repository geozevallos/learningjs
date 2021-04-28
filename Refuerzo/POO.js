//----------------------POO ---------------------------------

/**
 * Cosas importantes en la MOO:
 *
 * Clases : Viene a ser un modelo a seguir, como una  plantilla. Genera INSTANCIA
 * Objetos: Es una instancia de una clase. Como una copia del modelo. Tiene:
 *  Atributos: es una caracteristica o propiedade del objeto. (Son variables dentro de un objeto)
 *  Métodos: Son las acciones de un objeto puede hacer.
 */

//-------------------------------Prototipos
//ESto no es funcional
const animal = {
  nombre: "vaca",
  sonar() {
    console.log("Muuuu");
  },
};

const animal2 = {
  nombre: "gato",
  sonar() {
    console.log("miauu");
  },
};

console.log(animal);
console.log(animal2);

// ----Funcion constructora -
//Los atributos y los metodos deben sre con el this

//Este ejemplo, no es optimo xq lo ideal es q los métodos
//no se repitan en todos los objetos creados.

// function Animal (nombre, genero){
//     //Atributos
//     this.nombre = nombre;
//     this.genero = genero;

//     //Métodos
//     this.soonido = function(){console.log("GAAAAAA");}
// }

// //New: Permite crear una nueva instancia
// const porky = new Animal("Porky", "Cerdo"),
// donald = new Animal("Pato Donald", "Pato")

// console.log(porky, donald);

//Funcion constructura donde se asgiignan metodos al protopipo
function Animal(nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;
}

//Métodos agregados al prototipo de la funcion constructria
Animal.prototype.soonido = function () {
  console.log("GAAAAAA");
};

//New: Permite crear una nueva instancia
const porky = new Animal("Porky", "Cerdo"),
  donald = new Animal("Pato Donald", "Pato");

console.log(porky, donald);

//-------------------Herencia prototipica---------------------------

function Perro(nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}

//Perro está heredando de animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobreescibiendo el metodo de prototipo padre a hijo
Perro.prototype.soonido = function () {
  console.log("Hago otro sonido");
};

const pluto = new Perro("Pluto", "perrazo", "Grande");
console.log(pluto);

pluto.soonido();
porky.soonido();

//--------------------------  CLASES ---------------------------------------
//Las clases no reciben parámetros
//Para ello tienen el MÉTODO constructor. Este se ejecuta en el momento
// de instancia la clase

class Alumno {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  inscribirAlumno() {
    console.log(this.nombre);
  }
}

const Efrain = new Alumno("Efrain", 30);
console.log(Efrain);
Efrain.inscribirAlumno();

// de q vas a extenderte, de q vas a heredar
class Estudiante extends Alumno {
  constructor(nombre, edad, curso) {
    //El metodo super se llama al constructor de la clase padre
    super(nombre, edad);
    this.curso = curso;
  }

  inscribirAlumno() {
    console.log(this.nombre);
  }
}

let jorge = new Estudiante("Jorge", 25, "GIS");
console.log(jorge);

// --------  OPERACIONES CORTO CIRCUITO

// OR -> Cuando el valor de la izquierda en la expresión
//pueda validar a true, es el valor que se carga por defecto

//AND -> Cuando el valor de la izquierda en la expresion
//Siempre pueda validar a false, es el valor  cargara por decto

function decirHello(nombre) {
  nombre = nombre || "Desconocido";
  console.log(`Hola ${nombre}`);
}

console.log(decirHello("Persona desconocida"));
console.log(decirHello());

console.log(true || "valor de la derecha");
console.log(false || "valor de la derecha");

console.log(true && "valor de la derecha");
console.log(false && "valor de la derecha");

//----------------EXPRESIONES REGULARES -----------------------

//SEcuacia de caracteres q forma un patron de busqueda, principalmente
//utilizada para la busqueda de patrones de cadena de caracteres

let textoCualquiera = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem facere amet nisi esse iure itaque corrupti sit autem, dicta veritatis, nemo delectus quis, nesciunt rerum dolore nam. Perspiciatis, natus beatae.";

  //Dos cosas: Patron y banderas(modificaciones de la expresion)

//Que me busque lorem 
let expRegular = new RegExp("lorem", "");

//Mostrar true si es q existe
console.log(expRegular.test(textoCualquiera));
//Mostrar una lista
console.log(expRegular.exec(textoCualquiera));


//Que me busque lorem y q ignore mayuscula o minuscula y q no se
//detenga en la primera coincidencia
let expRegular2 = new RegExp("lorem", "ig");

//Mostrar true si es q existe
console.log(expRegular2.test(textoCualquiera));
//Mostrar una lista
console.log(expRegular2.exec(textoCualquiera));

//este es otro formato. Q me busque un numero
//let expRegularF2 = /lorem/ig;
let expRegularF2 = /\d/ig;
console.log(expRegularF2.test(textoCualquiera));

//buscar del 0 al 9
let textoBuscar = "1 2 4 5"
let expRegularF3 = /[0-9]/ig;
console.log(expRegularF3.test(textoBuscar));

//Q haya 2 veces el 1 
let expRegularF4 = /1{2}/ig;
console.log(expRegularF4.test(textoBuscar));



//-----------FUNCION ANONIMA AUTOEJECUTABLE --------------------------------

(function(){
    console.log("Esta es una funcion autoejecutable");
})();

(function(a,b,c){
    console.log("Esta es otra funcion autoejecutable");
    console.log(a, b, c);
})("uno", "dos", "tres");

/** 
//Otras maneras -- Crockfor
((function () {
    console.log("algo");
})());

//Unaria
+function(){
    console.log("version unaria");
}();

//Facebook
!function(){
    console.log("version fb");
}();
*/
