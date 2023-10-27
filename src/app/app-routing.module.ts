import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';
import { SmJ1Component } from './views/inicio/sm-j1/sm-j1.component';


const routes: Routes = [
  { path: 'Inicio', component: InicioComponent},
  { path: 'Login', component: LoginComponent},
  { path: 'Registro', component: RegistroComponent},
  { path: '', redirectTo: '/Inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
