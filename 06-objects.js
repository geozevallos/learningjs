/**
 * Los Objetos son variables que pueden contener muchos valores.
 * Estos valores se conocen propiedades,y valores de propiedad
 */

//Creando un objeto
let persona = {
  nombre: "Jorge",
  edad: 28,
  colorFav: "blue",
  altura: 168,
};

// Podemos acceder a los valores de los objetos de dos maneras

persona.altura;

//o

persona["altura"];

let x = persona.nombre;
console.log(x);

let y = persona["edad"];
console.log(y);

// Conocer la longitud de un nombre
console.log(persona.nombre.length);

//Un objeto metodo es una pripiedad que contiene una función de definicion
//objectname.nombreMetodo()

// write es un meotodo del objeto document

// Un meotoo es una función que es guardada como una propiedadd de objeto

document.write("Esto es un ejemplo de metodo");

//El objeto constructor

// a veces se necesita esablacer un tipo de objeto q pueda ser usado
// para crear un numero de objetos de un tipo unico

//Funcion constructor
// Toma paramaestros y los asigna a una propiedad de objeto

// El this hace referencia al objeto reciente. Es un keyword. su valor
//No puede ser cambiado

function personas(nombre, edad, color) {
  this.nombre = nombre;
  this.edad = edad;
  this.colorFav = color;
}

// Creando objetos de otra manera
//Ahora q se tiene el constructor, podemos usar new para crar un nuevo
// objeto del mismo tipo

// Es decir hemos creado objetos de tipo personas
let ana = new personas("Ana", 30, "Rosado");
let maria = new personas("Maria", 18, "negro");

console.log(ana.edad);

function mascota(nombre, raza, sexo) {
  this.nombre = nombre;
  this.raza = raza;
  this.sexo = sexo;
}

let duque = new mascota("duqueza", "chusca", "hembra");
console.log(duque.raza);

// Crear un unico objeto
// Modo literal o initializare

var Jorge = {
  nombre: "Jorge Ernesto",
  edad: 28,
};

console.log(Jorge.nombre);

/**
 * Metodos: Funcines guardadas como propiedades de oobjeto
 */

// nombreMetodo = function () {codigo}
//objNombre.nombreMetodo()

// No es otra cosa q una fucnión dentro del objeto la cual podemos ejecutarla

function personal(cargo, edad) {
  (this.cargo = cargo),
    (this.edad = edad),
    (this.cambioCargo = function (cargo) {
      this.cargo = cargo;
    });
}

let a = new personal("Ingeniero", 25);

console.log(a);
a.cambioCargo("Jefe");

console.log(a);

// Creando una funcion fuera del constructor y asociandolo al objeto

function alumno(nombre, edad) {
  (this.nombre = nombre),
    (this.edad = edad),
    (this.nacimiento = fechaNacimiento);
}

function fechaNacimiento() {
  return 2021 - this.edad;
}

let ss = new alumno("Pedrito", 12);

console.log(ss.nacimiento());

// Ejercicio

/**
 * Contact Manager


You are working on a Contact Manager app.
You have created the contact object constructor, which has two arguments, 
name and number. You need to add a print() method to the object,
 which will output the contact data to the console in the following format: 
 name: number
The given code declares two objects and calls their print() methods. 
Complete the code by defining the print() method for the objects.
 */

function contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = function print (){
        console.log(`${name}: ${number}`)
}}



var a = new contact("David", 12345);
var b = new contact("Amy", 987654321)
a.print();
b.print();