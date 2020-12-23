'use stric'
/**
 * Formas de definir un array
 */
const nombres=['Rodrigo', 'Sanchez', 'Jhoel', 'Osvaldo', 'Miguel'];
const lenguajes=new Array('php', 'js','go', 'java', 'c#');
//acceder a un elemento
const [nombre1]=nombres;//por desestructuracion

/*let elemento=parseInt(prompt("Que elemento del array quieres?"));
if(elemento>=nombres.length){
    alert(`Introduce un indice menor que ${nombres.length}`);
}else{
    alert(nombres[elemento]);
}*/
/**
 * 
 * Recorrer un array con forEach
 * 
 */
document.write('<h1>Lenguajes de programacion del 2020</h1>');
    let plantilla=``;
document.write('<ul>');
    lenguajes.forEach((lenguaje, index)=>{
        plantilla+=`<li>${index+1} - ${lenguaje}</li>`;
    });
    document.write(plantilla);
document.write('</ul>');