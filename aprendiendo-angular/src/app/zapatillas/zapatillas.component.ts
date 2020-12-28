import { from } from "rxjs";
import {Component} from '@angular/core';
import {Zapatilla} from '../models/zapatilla';

@Component(
    {
       selector:'zapatillas',
       templateUrl:'./zapatillas.component.html' 
    }
)

export class ZapatillasComponent{
    public titulo:string;
    public zapatillas=new Array(
        new Zapatilla('Nike 10', 'Nike', 'Yellow', 1200, false),
        new Zapatilla('Nike 10', 'Nike', 'Black', 2000, true),
        new Zapatilla('Nike 20', 'Nike', 'Red', 1000, false),
        new Zapatilla('Adidas RE', 'Adidas', 'Blue', 1300, true)    
    );
    constructor(){
        this.titulo=`Componente de zapatillas`;
        console.log(`Componete zapatilla cargado correctamente`);
        //console.log(this.zapatilla);
    }
}