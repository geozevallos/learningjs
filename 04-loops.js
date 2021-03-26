// Loops

/**
 * -----------------------for loop ------
 * 
 * for (statement1; statement2; statetment 3){
 * bloque de codigo a ser ejecutado
 * }
 * 
 * 
 * el primer statemnt se ejecuta antes del loop empiece
 * statment2: define la condicion de la ejecución del loop
 * statement 3: es ejecutado cada vez despues del loop ha sido ejecutado
 * * 
 */


for (let i = 1; i < 6; i++){
    console.log(i);
}


// Eñ primer statement puede ser declarado antes
let x = 0;

for(;x<5;x++){
    console.log(x);
}

//Puedes colocar 2 valores ene l primer statement
for (z=0, text=""; z < 5; z++){
    text = z;
    console.log(text);
}

// El statement 2 puede ser opcional si y solo sí se
// coloca un break en el statemetn

// El tercer statement: Puede ser incremento positivo o negativo
// puede ser opcional si el incremento se da adentro:

let r = 5;
for ( ; r < 10;){
    console.log(r);
    r++;
}


// --------------WHILE ----------

/**
 * while(condicion){
 * bloque de codigo
 * }
 */

let g = 0;

while(g<=10){
    console.log(g);
    g++;
}


// --- DO WHILE
// ejecuta el codigo y luego chequea si es cierta la condicion
// Quiere decir q siempre se ejecutará al menos una vez
/**
 * do{
 * bloque de codigo
 * }
 * while(condicion);
 */

let f = 20;
do {
    console.log(f);
    f++;
}
while (f<25)


// BREAK -------------------- 

// TErmina el loop
for (g=0; g <= 10; g++){
    if(g === 8){
        break;
    }
    console.log(g);
}


// Continue 
// salta al siguiente codigo
// Por ejm acá se saltaría el 5
for (let h = 0; h < 9; h++){
    if (h===5){
        continue;
    }
    console.log(h);
}

// The snail climbs up 7 feet each day and slips back 2 feet each night.
// How many days will it take the snail to get out of a well with the given depth?


// let dist = 0
// let depth = 31;
// for(let j = 0; j < depth; j++){
//     dist = dist + 7
//     if(dist > depth){
//         console.log(j)
//         break;
//     } else{
//         dist = dist - 2
//     }
// }

let dist = 0
let dias = 0
let depth = 42

while (dist < depth){
    dias = dias + 1;
    dist = dist + 7;
    if(dist >= depth){
        console.log(dias)
        break;
    }else{
        dist = dist -2;
    }
}