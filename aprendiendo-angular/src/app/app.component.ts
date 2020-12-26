import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aprendiendo-angular';
  mostrarVideojuego:boolean=true;

  ocultarVideojuegos(){
    this.mostrarVideojuego=false;
  }
}
