let t = setInterval(move, 10);

//Posicion inicial
var pos = 0;

var box = document.getElementById("box");

function move () {
    if (pos >= 150){
        clearInterval(t)
    } else{
        pos += 1;
    box.style.left = pos+"px";
    }
    
}