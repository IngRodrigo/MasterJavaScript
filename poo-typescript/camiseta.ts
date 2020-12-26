//Decoradores : Agrega una funcion a la clase en la que lo implementemos
//se implementa de la siguente forma @midecorador

function midecorador(logo:string){
    return function(target:Function){
        target.prototype.estampacion=function():void{
            console.log(`Camiseta estampada con el logo: ${logo}`)
        }
    }

}

//Interface
interface CamisetaBase{
    getColor();
    setColor(color:string);
}

//clase
@midecorador('rod-dev')
class Camiseta implements CamisetaBase{
    //Propiedades
    private color:string;
    private modelo:string;
    private marca:string;
    private talla:string;
    private precio:number;
    //Metodos
    public setColor(color:string){
        this.color=color;
    }
    public getColor():string{
        return this.color;
    }
    //constructor
    constructor(color, modelo, marca, precio){
        this.color=color;
        this.modelo=modelo;
        this.marca=marca;
        this.precio=precio;
    }
}

//clase hija

class sudadera extends Camiseta{

}

let sudaderaNew= new sudadera("Verde","mangas cortas", "nike", 500);

console.log(sudaderaNew);

