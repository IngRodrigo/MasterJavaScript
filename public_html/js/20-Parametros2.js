'use stric';
/* Los parametros de rest y spread*/
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log('Fruta 1: '+fruta1);
       console.log('Fruta 2: '+fruta2);
       console.log(resto_de_frutas);
}

listadoFrutas('Naranja','Manzana','Melon','Coco','Sandia','Pera');
var frutas=['Naranja','Manzana'];
listadoFrutas(...frutas, 'sandia', 'Melon');