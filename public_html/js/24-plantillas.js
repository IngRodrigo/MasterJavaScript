'use stric';
var nombre=prompt("Mete tu nombre");
var apellido=prompt("Mete tus apellidos");

var plantilla=`
        <h1>Hola que tal?</h1>
        <h3>Mi nombre es: ${nombre}</h3>
        <p>Mis apllidos son: ${apellido}</p>
`;

document.write(plantilla);