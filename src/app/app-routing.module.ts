import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';
import { LoginComponent } from './views/login/login.component';
import { ContactoComponent } from './views/contacto/contacto.component';


const routes: Routes = [
  { path: 'Inicio', component: InicioComponent},
  { path: 'Login', component: LoginComponent},
  { path: 'Contacto', component: ContactoComponent},
  { path: '', redirectTo: '/Inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
