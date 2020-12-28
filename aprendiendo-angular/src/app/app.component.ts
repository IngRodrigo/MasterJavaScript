import { Component } from '@angular/core';

import {Configuracion} from './models/configuracion'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aprendiendo-angular';
  descripcion='';
  mostrarVideojuego:boolean=true;
  public config;  
  ocultarVideojuegos(){
    if(this.mostrarVideojuego){
      this.mostrarVideojuego=false;
    }else{
      this.mostrarVideojuego=true;
    }
  }

  constructor(){
    this.config=Configuracion;
    this.title=this.config.titulo;
    this.descripcion=this.config.description;
  }
}
