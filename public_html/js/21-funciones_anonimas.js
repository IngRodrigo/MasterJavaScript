'use stric';
//funciones anonimas y funcion de flecha

let pelicula=function(nombre){
    return `La pelicula es ${nombre}`;
}

//console.log(pelicula("Spiderman"))

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    const suma= numero1+numero2;
    sumaYmuestra(suma);
    sumaPorDos(suma);
    return suma;
}

sumame(5,1, dato=>{
    console.log(`La suma es: ${dato}`);
    }, dato=>{
        console.log(`La suma por dos es: ${dato*2}`)
        })
