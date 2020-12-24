const pelicula={
    titulo:'Batman',
    year:2017,
    pais:'EEUU'
}

const pelicula2={
    titulo:'Spiderman',
    year:2002,
    pais:'EEUU'
}
const peliculas=[pelicula, pelicula2];

let divCajaPeliculas=document.getElementById('peliculas');


peliculas.forEach(pelicula=>{
    let parrafo=document.createElement('p');
    parrafo.append(`Titulo: ${pelicula.titulo}`);
    divCajaPeliculas.appendChild(parrafo);
});