/**
 * 
 * EVENTOS DEL MOUSE
 * 
 */
const boton=document.getElementById('boton');

boton.addEventListener('click',cambiarColor);


//funciones
function cambiarColor(){
    
    let colorBoton=boton.style.background;
    if(colorBoton=='green'){
        boton.style.background="red";
    }else{
        boton.style.background="green";
    }
}
/**
 * 
 * MOUSE OVER
 */
boton.addEventListener('mouseover', ()=>{
    boton.style.color='red';
})
/**
 * 
 * EVENTOS DEL TECLADO
 * 
 */
const input=document.getElementById('campo_nombre');
input.addEventListener('focus', ()=>{
    console.log(`Focus`);
});
input.addEventListener('blur', ()=>{
    console.log(`Evento blur`);
});
//cuando escribes
input.addEventListener('keydown', (evento)=>{
    console.log(String.fromCharCode(evento.keyCode));
})
input.addEventListener('keypress', (evento)=>{
    console.log(`KeyPress: ${evento.key}`);
})