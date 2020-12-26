import {Component} from '@angular/core';

@Component(
    {
        selector:'videojuego',
        templateUrl:'./videojuego.componet.html'
    }
)
//definimos la clase a exportar tambien se tiene que definir en el app.module.ts para poder usarlo en la apliacion
export class VideojuegoComponent{
    public titulo:string;
    public listado:string;
    
    constructor(){
        this.titulo=`Componente de Videojuegos`;
        this.listado=`Listado de los juegos mas populares`;
        //console.log("Se ha cargado el componente correctamente");
    }
}