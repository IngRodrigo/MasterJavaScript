/**
 * 
 * MANIPULANDO LOS ELEMENTOS DE NAVEGADOR
 * 
 */

 const mostrarDatosDelNavegador=()=>{
     
     console.log(`Tamaño horizontal de la pagina mostrada: ${window.innerWidth}`);
     console.log(`Tamaño vertical de la pagina mostrada: ${window.innerHeight}`);
 }

 const redirigir=(url)=>{
    window.location.href=`${url}`;
 }

 const abrirUrlEnVentanaNueva=(url)=>{
    window.open(url);
 }
 mostrarDatosDelNavegador();