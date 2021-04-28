//2 maneras con temporizadores:

//Set timeout: Recibo un callback y un tiempo en milisegundos
//SE ejecuta solo una vez
setTimeout(() => {
    console.log("Esto es un set time out");
}, 4000);

console.log("Kaaa");



//Set Interval

// setInterval(() => {
//     console.log("Se ejecuta intervalo de tiempo");
// }, 3000)

//Un reloj
// setInterval(() => {
//     console.log(new Date().toLocaleTimeString(), 1000);
// })



// ------- Funciones que cancelan:

//clearTimeout() 
//clearInterval