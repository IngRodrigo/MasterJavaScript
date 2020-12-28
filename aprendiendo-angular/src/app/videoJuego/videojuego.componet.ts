import {Component, DoCheck, OnDestroy, OnInit} from '@angular/core';

@Component(
    {
        selector:'videojuego',
        templateUrl:'./videojuego.componet.html'
    }
)
//definimos la clase a exportar tambien se tiene que definir en el app.module.ts para poder usarlo en la apliacion
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo:string;
    public listado:string;
    
    
    constructor(){
        this.titulo=`Componente de Videojuegos`;
        this.listado=`Listado de los juegos mas populares`;
        //console.log("Se ha cargado el componente correctamente");
    }
    cambiarTitulo(){
        this.titulo=`Nuevo titulo del compoente`;
    }
    //rod_dev: metodo de la interface OnInit se ejecuta al iniciar el componente
    ngOnInit(){
      //  console.log(`OnInit Ejecuado`);
    }
    //rod_dev: se ejecuta cuando se efectua algun cambio en la aplicacion
    ngDoCheck(){
        //console.log(`Se ejecuto el DoCheck`);
    }
    //rod_dev: se ejecuta antes de elimnar un componente
    ngOnDestroy(){
        //console.log(`OnDestroy ejecutado`);
    }

}