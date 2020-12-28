import { from } from "rxjs";
import {Component, OnInit} from '@angular/core';
import {Zapatilla} from '../models/zapatilla';

@Component(
    {
       selector:'zapatillas',
       templateUrl:'./zapatillas.component.html' 
    }
)

export class ZapatillasComponent implements OnInit{
    public titulo:string;
    public mi_marca:string;
    
    public zapatillas=new Array(
        new Zapatilla('Nike 10', 'Nike', 'Yellow', 1200, false),
        new Zapatilla('Nike 10', 'Nike', 'Black', 2000, true),
        new Zapatilla('Nike 20', 'Nike', 'Red', 1000, false),
        new Zapatilla('Adidas RE', 'Adidas', 'Blue', 1300, true)    
    );

    public marcas: String[];
    constructor(){
        this.mi_marca="File";
        this.marcas=new Array();
        this.titulo=`Componente de zapatillas`;
        console.log(`Componete zapatilla cargado correctamente`);
        //console.log(this.zapatilla);
    }
    ngOnInit(){
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach(zapatilla => {

            //buscara la marca dentro del array marcas con el indexOf devuelve -1 cuando no encuentra el elemento
            if(this.marcas.indexOf(zapatilla.marca)<0){

                this.marcas.push(zapatilla.marca);
            }

        });


        //console.log(this.marcas);
    }
    addMarca(){
            this.marcas.push(this.mi_marca);
    }
    borrarMarca(indice:any){
        this.marcas.splice(indice, 1);
    }

    mostrarMarca(){
        alert(this.mi_marca);
    }
}