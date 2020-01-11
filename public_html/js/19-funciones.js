'use stric';
var num1 = parseInt(prompt("Ingrese el primer numero "), 0);
var num2 = parseInt(prompt("Ingrese el segundo numero "), 0);
function calculadora(num1, num2) {
    console.log("Suma: " + (num1 + num2));
    console.log("Resta: " + (num1 - num2));
    console.log("Producto: " + (num1 * num2));
    console.log("Division: " + (num1 / num2));
    console.log("*******************************");
   // return "Hola soy la calculadora";
}

resultado = calculadora(num1, num2);
console.log(resultado);
