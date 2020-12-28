import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//mis importaciones
/**
 * Modulos
 * 
 */
import {VideojuegoComponent} from './videoJuego/videojuego.componet';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
//los componentes, pipes, van siempre en declarations
@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
