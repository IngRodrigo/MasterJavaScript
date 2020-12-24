//Operaciones con el DOM
//seleccionar elemento por el id
const miCaja=document.getElementById('micaja');
//const miCaja=document.querySelector('#micaja');//lo mismo
//sacar el conenido que tiene el elemento o modificar el contenido
miCaja.innerHTML="Cambie el contenido desde JavaScript";
//agregar estilos
miCaja.style.background="red";
miCaja.style.color="Black";
//agregar clase 
miCaja.className="miClase a";

const cambiarColor=(color)=>{
    miCaja.style.background=`${color}`;
}

/**
 * 
 * seleccionar elemento por su etiqueta
 * 
 */
const todosLosDiv=document.getElementsByTagName('div');
//podemos mostrar el texto del div con el metodo texContent
const[,,elemento2]=todosLosDiv;//desestructuracion del array 
elemento2.style.color=`green`;
const textoEnDiv=elemento2.textContent;

//recorrer el htmlColection
for (const valor in todosLosDiv) {
    if(typeof todosLosDiv[valor].textContent=='string'){
        const parrafo=document.createElement('p');
        const texto=document.createTextNode(todosLosDiv[valor].textContent);
        parrafo.appendChild(texto);
        const miSeccion=document.getElementById('miseccion');
        miSeccion.appendChild(parrafo);

    }
}
/**
 * 
 * seleccionar elementos por su clase o class
 * 
 */
const divsRojo=document.getElementsByClassName('rojo');
for (const valor in divsRojo) {
    
    console.log(divsRojo[valor]);
    if (divsRojo[valor].className==='rojo') {
        divsRojo[valor].style.background='RED';
    }
}