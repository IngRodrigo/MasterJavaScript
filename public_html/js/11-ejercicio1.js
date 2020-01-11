'use stric';
/* 
un programa que nos pida dos numero. 
nos diga cual es mayor, el menor y si son iguales

 */

var numero1=parseInt(prompt("Ingrese el primer numero",0));
var numero2=parseInt(prompt("Ingrese el segundo numero",0));
if(numero1>numero2){
    alert("El número "+numero1+ " es el mayor");
}else if(numero1<numero2){
        alert("El numero dos es el mayor");
}else{
    alert("Los numeros son iguales");
}
