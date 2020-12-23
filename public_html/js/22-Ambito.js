'use stric'

const saludar=(texto)=>{
    let hola_mundo='Texto dentro de una funcion';//variable solo de la funcion
    //console.log(hola_mundo);
    //console.log(typeof numero.toString());
    return console.log(texto);
}


let numero=12;//global
let texto= 'Hola mundo soy una variable global';

saludar(texto);