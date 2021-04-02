//Promesas 

/**
 * Una Promise es una mejor forma de programación asincrónica
 *  en comparación con la forma común de usar un método
 *  de tipo setTimeout ().
 */

// setTimeout(function(){
//     console.log("Esto se debe imprimir primero");
//     setTimeout(function(){
//         console.log("Esto segundo");
//     }, 1000);
// }, 1000);

// console.log("FIN");

//Con esto primero se emplea FIN, los otros 2 se dan asincronicamente

//Para mejorar ello exiseten las prmesas


// new Promise(function(resolve, reject){
//     if (success)
//     resolve(result);
//     else
//         reject(Error("failure"));
// })


function asyncFunc(trabajo) {
    return new Promise (function(resolve, reject){
        if(trabajo === "")
            reject(Error("Vacio"));
            setTimeout(function(){
                resolve(trabajo);
            }, 1000)
    })
}


asyncFunc("Trabajo 1").then(
    function(result){
        console.log(result);
        return asyncFunc("Trabajo 2");
    },
    function(error){
        console.log(error);
    }
).then(function(result){
    console.log(result);
}, function(error){
    console.log(error);
});
console.log("End");


// Iterators & Generators
/**
 * Symbol.iterator es el iterador predeterminado para un objeto
 */


/** ----------------MODULOS ---------------- */

//Exportando modulo 

//En lib/math.js
// export let sum = (x,y) => {return x + y;}
// export let pi = 3.14

//IMportaria en otro, por ejm app.js
// import * as math from 'lib/math'


// Metodos builtin

// Array Finding
//Encontrar el primer elemento de un arreglo
[1, 4, 5, 6, 8, 9].filter(function(x){
    return x > 3
})[0];

//tambien puede ser
[1, 4, 5, 6, 8, 9].find(x => x >3);


//----Repetir Strings:
console.log("algo".repeat(4));

//-- Find string
let d = "Jorge".startsWith("Jor",0);
console.log(d);

let m = "Jorge".endsWith("e", 4)
console.log(m);




//Ultimo ejercicio
class Add {
    constructor(...words) {
        this.words = words;
    }
    print() {
      
      var res="";
      for(var i=0;i<this.words.length;i++){
        res += "$"+this.words[i];
      }
      console.log(res+"$");
      
    }
  }
  
  var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
  var y = new Add("this", "is", "awesome");
  var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
  x.print();
  y.print();
  z.print();