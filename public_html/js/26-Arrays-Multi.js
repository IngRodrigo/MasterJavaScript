let categorias=['Accion', 'Comedia', 'Terror'];
let peliculas=['La verdad duele', 'La villa es maravillosa', 'spiderman'];

let cines=[categorias, peliculas];
const [categoriasArray, peliculasArray]=cines;
const [primerElemento]=categoriasArray;
//console.log(`El primer elemento del array categorias es: ${primerElemento}`);
//añadir un elemento
peliculas.push('Batman');

/*No funciona, queda en un bucle, analizar y corregir - rod-dev
let elemento="";
do{
    let elemento=prompt("Introduce tus peliculas favoritas: ");
    console.log(elemento);
    peliculas.push(elemento);
}while(elemento!=="a");*/

console.log(peliculas);
//convertir array a string separado por comas
const peliculas_string=peliculas.join();
console.log(peliculas_string);

//convertir de string a array con split()
const cadena="Rodrigo, Jesus, Miguel";
console.log(cadena.split(','));

//ordenar arraglo
console.log(peliculas.sort());
//invertir orden array
console.log(peliculas.reverse());

/**
 * Recorrer un array con for in
 * 
 */
const lenguajes=['js','java', 'c#','php'];
 for(let lenguaje in lenguajes){
    console.log(lenguaje);
 }

 /**
  * Busquedas dentro de un array
  * 
  */

const busqueda=lenguajes.find(lenguaje=>lenguaje=='php');
const buscarIndice=lenguajes.findIndex(lenguaje=>lenguaje=='php');
console.log(buscarIndice);