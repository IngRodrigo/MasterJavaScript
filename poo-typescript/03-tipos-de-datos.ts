//string
let Cadena: string | number="Rodrigo";//indicamos que puede ser string o numero
//tipo de dato personalizado
type alfanumero = string|number;

let miCadena: alfanumero="HOla";

//number
let Numero: number=1;

//boolean
let Verdadero_falso: boolean=true;

//any o cualquier tipo de dato
let Cualquiera: any="Hola";

//arrays
let MiArray: number[]=[1,2,3,4];
let Meses: Array<any>=["Hola",1];

console.log(Cadena, Numero, Verdadero_falso, Cualquiera, MiArray, Meses);

console.log(miCadena);