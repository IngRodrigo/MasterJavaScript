'use stric';
/* Transformacion de textos*/
var numero=44;
var texto1="Bienvenido al curso de JavaScript";
var texto2="Es muy buen curso";

var dato=numero.toString();
dato=texto1.toUpperCase();
dato=texto2.toLowerCase();
//console.log(dato);
/*Calcular la longitud de un texto*/
var nombre="";
//    nombre=["Hola","Hola"];//tambien cuenta elementos
//console.log(nombre.length);
//como concatenar

var textoTotal=texto1+" - "+texto2;
var textoTotal=texto1.concat(" - "+texto2);//el resultado es el mismo con la funcion concat//
//busar dentro de una cadena

var busqueda=texto1.indexOf("curso");//en que pocisicion esta la palabra
var busqueda=texto1.lastIndexOf("curso");//la ultima vez que aparece en la cadena. de izquierda a derecha
//Si la palabra no esta aparece -1
var busqueda=texto1.match("curso");//devuelve un array con los resultados que encuentre
var busqueda=texto1.substr(14,5);//sacar 5 letras desde el caracter 14
var busqueda=texto1.charAt(44);//saca la letra que le indquemos en su indice
console.log(busqueda);



