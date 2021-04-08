///-- Arreglos 

const a = [1, true, "Hola", ["A", "B", [1,2,3]]]

//INgresar al valor numero 3

console.log(a[3][2][2]);


//TAmbién se puede definir así 
const b = Array.of("a", "b", 1)
console.log(b);

//Rellenar valores
const c = Array(20).fill("Jorge")
console.log(c);

//Agregar un valor
const d = [1, 2, 3, 4]
d.push(5)

console.log(d);

//Quitar el ultimo
d.pop();
console.log(d);

//Longitud
console.log(d.length);



//** --------------------- OBJETOS ----------------------------- */

const obj0 = {}
console.log(obj0);

//Son llave - valor
//Variables = Atributo, propiedad -- Una funcion es un METODO
const jorge = {
    nombre: "Jorge",
    apellido: "Zevallos",
    pasatiempos: ["Dormir", "Jugar play"],
    contacto: {
        email: "jzevallos@gmail.com",
        celular: 95454545
    },
    saludar: function (){
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
}

console.log(jorge);
console.log(jorge.pasatiempos);
console.log(jorge.pasatiempos[1]);
console.log(jorge["apellido"]);
console.log(jorge.contacto);
console.log(jorge.contacto.email);
jorge.saludar();


//Obteniendo keys y values del objeto
console.log(Object.keys(jorge));
console.log(Object.values(jorge));

//Existe una propiedad llamada " "
console.log((jorge.hasOwnProperty("contacto")));



// --------------------------------------------LOOPS -----------------------------
/// -- Loop For In  ----- Solo para OBJETOS

for (const key in jorge) {
    console.log(key, jorge[key]);
};

for (const i of a) {
    console.log(i);
}


// --------------------------------- Destructuracion -------------------------------------
//

//del array d q es [1,2,3,4]
const [uno, dos, tres, cuatro] = d;
console.log(dos);

//En un objeto tiene q tener el mismo nombre. No importa el nombre
let {nombre, apellido, pasatiempos} = jorge;

console.log(pasatiempos);