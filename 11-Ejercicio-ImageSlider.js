var images = [
    "https://place-hold.it/300x500",
    "https://place-hold.it/320x400",
    "https://place-hold.it/350x500"
];

let btnback = document.getElementById("back");
let btnnext = document.getElementById("next");
let slider = document.getElementById("slider");
let num = 0;

console.log(btnback);

btnback.addEventListener("click", atras);
btnnext.addEventListener("click", adelante);

function adelante (){
    num++;
    if (num >= images.length){
        num = 0
    }
    slider.src = images[num];
};

function atras (){
    num--;
    if (num < 0){
        num = images.length-1;
    }
    slider.src = images[num];
};
