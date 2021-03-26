      // Escribir en el buscador (SOLO PARA TESTEAR)
    //   Cada linea de codigo se conoce como statement
    document.write("Hola, amigos!");

    // Escribir con diseño
    document.write("<h1>Jorge!<h1>");

    // Escribiendo en el console (Sirve para testear)
    console.log("Escribiendo acá");

    //   Asignando valor  las variables:
    var x = 20;
    document.write(x);

    // Asignando variable y reutilizando:
    x = 55;
    console.log(x);

    // Javascript es casesensitive
  //   var x = 100;
  //   document.write(X);

    // Las variables pueden empezar con una lera, un guion abajo (_), o un signo dolar $.
    // - No debe iniciar con un numero, y no debe incluir operadores matematicos.
    // - No debe contener espacio, ni simbolos especiales

    // alert("Esto es una alerta!")

    
    // Tipos de datos: #########################

    // Number: decimal y no decimal ----------
    var num = 42;
    var precio = 5.20;

    // Puedes asignar otro tipo
    num = "cuarenta y dos"
    console.log(num);

    // variable texto   ----------------------
    var nombre = 'Jorge'
    var texto = "Mi nombre es Jorge"
    // esto funciona xq son comillas distintas
    var apodo = "Me dicen 'Jorgiño'"
    console.log(apodo);

    // backslash scape ------------------------------
    // Sirve para saltar caracteres especiales
    
    // para q funcione el ejemplo de arriba sin comillas sería
    apodo = "Me dicen \"George\""
    console.log(apodo);

// datos booleans ------------------------
var isActive = true;
console.log(isActive);

// Ojo: Los valores booleanos de cero, null, undefined, empty string es falso


