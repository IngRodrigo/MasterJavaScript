import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';

const routes: Routes = [
{path: '', component:HomeComponent},
{path: 'home', component:HomeComponent},
{path: 'zapatillas', component:ZapatillasComponent},
{path:'cursos', component:CursosComponent},
{path:'**', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
