//comprobar si el navegador es compatible
if(typeof(Storage)!=='undefined'){
    console.log(`LocalStorage disponible`);
}else{
    console.log(`No esta disponible el LocalStorage`);  
}
//guardar datos en el localstorage
localStorage.setItem('titulo', 'Curso de Sinfony');

//recuperar elemento del localstorage
const item=localStorage.getItem('titulo');

const cajaPeliculas=document.getElementById('peliculas');

//cajaPeliculas.innerHTML=item;

//Guadar objetos
const usuario={
    nombre:'Rodrigo',
    email:'rodrigo@gmail',
    web:'wwww'
}
//convertir el objeto a string antes de enviar al localstorage
localStorage.setItem('usuario', JSON.stringify(usuario));

//recuperar el objeto del local storage
const user=JSON.parse(localStorage.getItem('usuario'));
//console.log(user);

//localStorage.removeItem('usuario');
//localStorage.clear();