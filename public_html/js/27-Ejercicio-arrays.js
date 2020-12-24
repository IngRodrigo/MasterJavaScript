/**
 * 1- Pida 6 numeros por pantalla y los meta a un array-
 * 2- Mostrar el array entero (Todos sus elementos) en el cuerpo de la pagina y en consola-
 * 3- Ordenarlo y mostrarlo-
 * 4- Invertir el orden y mostrarlo-
 * 6- Mostrar cuantos elementos tiene el array
 * (Se valora el uso de funciones)
 * 
 */

let numeros=[];

    const pedirDatos=()=>{
       
        for(let i=0; i<=5; i++){
            numeros.push(parseInt(prompt("Inntroduzca 6 numeros")));
        }
        mostrarDatos();
    }

    const mostrarDatos=()=>{
        //Mostrar en el cuerpo de la pagina
        numeros.forEach((numero)=>{
            document.write(`<p>${numero}</p>`);
        });
        //mostrar en consola
        numeros.forEach(numero=>{
            console.log(numero);
        });
        
        //ordenar y mostrar
        numeros.sort();
        console.log("Ordenado: ");
        console.log(numeros.sort());
        console.log(`Invertido: ${numeros.reverse()}`);
        console.log(`Cantidad de elementos: ${numeros.length}`);
    }

    pedirDatos();