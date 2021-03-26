
// El objeto document

//Siempre se usa este objeto para acceder a los
//objetos en el HTML

//document.body.innerHTML = "Algo acá";


//Seleccionando elementos ****
//Los elemenots del HTML son objetos
//Cada objeto tiene propiedades y metodos

//Encontrar por id
//document.getElementByid("id");
let a = document.getElementById("otracosa");
console.log(a);
a.innerHTML="abc"


//Encontrar elementospor nombre de clase
//document.getElementsByClassName("classname")
let lista = document.getElementsByClassName("lista")
lista[1].innerHTML = "2do en la lista";



//Encontrar elementos por tag name
//document.getElementsByTagName("nombretag")
let h2 = document.getElementsByTagName("h2");
console.log(h2);

let titulo = Array.from(h2)
titulo.forEach((element) => {
    element.innerHTML = "GAAAA"
});