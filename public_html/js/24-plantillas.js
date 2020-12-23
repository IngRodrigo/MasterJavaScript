'use stric';
let nombre=prompt("Introduce tu nombre: ");
let apellido=prompt("Introduce tu apellido: ");

let plantilla=`
        <h1>Hola como estas?</h1>
        <h2>Mi nombre es ${nombre}</h2>
        <p>Mi apellido es: ${apellido}</p>
`;

document.write(plantilla);