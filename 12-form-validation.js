//Required para hacer mandatorio el llenado de un campo

let formulario = document.getElementById("formulario");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

console.log(formulario);

formulario.onsubmit = (e) => {
    e.preventDefault()
  validate();
};

function validate() {
  if (num1.value !== "" && num2.value !== "") {
    if (num1.value == num2.value) {
      return true;
    }
  }
  alert("Los valores deberían ser iguales y no vacíos");
  return false;
}
