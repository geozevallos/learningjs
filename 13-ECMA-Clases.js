//CLASES

//Las clase sirven para crear objetos con la misma estructura

//Una clase usa la palabta clave CLASS y 
// contiene un metodo CONSTRUCTOR para inicialiar

//Solo puede haber un constructor por clase

class Rectangulo{
    constructor(altura, ancho){
        this.altura = altura;
        this.ancho = ancho;
    }
}


const nuevoR = new Rectangulo(10, 10);
console.log(nuevoR);


//Definir una clases con un CALSE DE EXPRESION

//Una clase nombrasda sera:;

// var cuadrado = class Rectangulo{
//     constructor(altura, ancho){
//         this.altura = altura;
//         this.ancho = ancho;
//     }
// }

//UNa clase no nombrada será

// var cuadrado = class {
//     constructor(altura, ancho){
//         this.altura = altura;
//         this.ancho = ancho;
//     }
// }


//CLASS METHODS

class Cuadrado {
    constructor(lado, ancho) {
        this.lado = lado;
        this.ancho = ancho;
    }
    // Esto es un getter
    get area () {
        return this.calcArea();
    }
    //Esto es un metodo
    calcArea(){
        return this.lado * this.ancho
    }
}

const cuadrado = new Cuadrado(4,4);
console.log(cuadrado);
console.log(cuadrado.area);

//Otro metodo: STATIC METHOD

class Punto {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    static distancia(a,b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx,dy)
    }
}

const p1 = new Punto(7, 2);
const p2 = new Punto(3, 8);

console.log(Punto.distancia(p1, p2));
console.log(p1);


///-- INHERITANCE

//extends sirve para crear un hijo de class
class Animal {
    constructor(nombre){
        this.nombre = nombre;
    }
    sonido(){
        console.log(this.nombre + " hace un sonido.");
    }
}

class Perro extends Animal{
    sonido(){
        console.log(this.nombre + " ladra");
    }
}

let perro = new Perro("Duquesa");
perro.sonido();


// Podemos usar también Super para llamar al metodo padre

class Gato extends Animal{
    sonido(){
        super.sonido();
        console.log(this.nombre + " maulla");

    }
}

let gato = new Gato("michi")
gato.sonido();
console.log(gato);




//-------OBJETO MAP


/**
 * Un objeto Map se puede utilizar para contener pares clave / valor. 
 * Una clave o valor en un mapa puede ser cualquier cosa (objetos y valores primitivos).

La sintaxis new Map ([iterable]) crea un objeto Map donde iterable es una matriz o
 cualquier otro objeto iterable cuyos elementos son matrices (con un par clave / valor cada uno).
 
 Un objeto es similar al mapa, pero existen diferencias 
 importantes que hacen que el uso de un mapa sea preferible 
 en ciertos casos:
1) Las claves pueden ser de cualquier tipo, 
incluidas funciones, objetos y cualquier primitiva.
2) Puede obtener el tamaño de un mapa.
3) Puede iterar directamente sobre Map.
4) El rendimiento del mapa es mejor en escenarios 
que implican la adición y eliminación frecuentes 
de pares clave / valor.
 */


//Size retorna el numeros de keys y valores

let map = new Map([['k1', 'v1'], ['k2', 'v2']]);
console.log(map.size);

/**
 * 
 * 770 / 5000
Resultados de traducción
Métodos
set (clave, valor) Agrega un par clave / valor especificado al mapa. Si la clave especificada ya existe, el valor correspondiente se reemplaza con el valor especificado.
get (key) Obtiene el valor correspondiente a una clave especificada en el mapa. Si la clave especificada no existe, se devuelve undefined.
has (clave) Devuelve verdadero si existe una clave especificada en el mapa y falso en caso contrario.
delete (clave) Elimina el par clave / valor con una clave especificada del mapa y devuelve verdadero. Devuelve falso si el elemento no existe.
clear () Elimina todos los pares clave / valor del mapa.
keys () Devuelve un iterador de claves en el mapa para cada elemento.
valores () Devuelve un iterador de valores en el mapa para cada elemento.
entradas () Devuelve un iterador de matriz [clave, valor] en el mapa para cada elemento. 
 */

let map2 = new Map();

map2.set('k1', 'v1').set('k2', 'v2');

console.log(map.get('k1'));

console.log(map.has('k2'));



//****************METODO SET***************** */

/** 
 *
 * 
Un objeto Set puede usarse para contener valores únicos (no se permiten repeticiones).
Un valor en un conjunto puede ser cualquier cosa (objetos y valores primitivos). 

La sintaxis new Set ([iterable]) crea un objeto Set 
donde iterable es una matriz o cualquier otro objeto 
iterable de valores.


*/

//La propiedad de tamaño devuelve el número de valores  distintos en un conjunto.

let set = new Set([12, 23, 34, 45, 45, 23]);

console.log(set.size);

/**
 * METODOS 
 * 275 / 5000
Resultados de traducción
add (value) Agrega un nuevo elemento con el valor dado al conjunto.
eliminar (valor) Elimina un valor especificado del conjunto.
has (valor) Devuelve verdadero si existe un valor especificado en el conjunto y falso en caso contrario.
clear () Borra el conjunto.
valores () Devuelve un iterador de valores en el conjunto. 
 */

//Set soporta diferentes tipos de ddatos
// 1 y "1" son disntos

let set2 = new Set();
set2.add(6).add(12).add(24).add(12);

console.log(set2.has(6));

for ( let v of set2.values())
console.log(v);

