const caja=document.getElementById('usuarios');
const cargando=document.getElementById('loading');
const cajaUsuario=document.getElementById('usuario');


const cargandoUser=document.getElementById('loadingUser');
const url="https://reqres.in/api/users";
const urlUsuario="https://reqres.in/api/users/5";
function getUsuarios(){
    return fetch(url);
}
function getUsuario(){
    return fetch(urlUsuario);
}

getUsuarios()
    .then(data=>data.json())
    .then(({data})=>{
        mostrarDatos(data);
        
    })
    getUsuario()
    .then(user=>user.json())
    .then(({data})=>{
        mostrarUsuario(data);
    })
    ;
const mostrarUsuario=({id, avatar, first_name})=>{
    let nombre=document.createElement('h2');
    let imagen=document.createElement('img');
    imagen.src=avatar;
    let contenido=`${id}- ${first_name}`;
    nombre.append(contenido);
    cajaUsuario.append(nombre);
    cajaUsuario.appendChild(imagen);
    cargandoUser.style.display='none';

}
const mostrarDatos=(data)=>{
    data.forEach(({id, first_name}) => {
        let lista=document.createElement('li');
        let contendio=`${id}- ${first_name}`;
        lista.append(contendio);
        caja.appendChild(lista);
        cargando.style.display='none';
    });
}