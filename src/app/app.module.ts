import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { LoginComponent } from './views/login/login.component';
import { NavbarComponent } from './views/inicio/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './views/inicio/carousel/carousel.component';
import { CategoriasComponent } from './views/inicio/categorias/categorias.component';
import { AnunciosComponent } from './views/inicio/anuncios/anuncios.component';
import { RegistroComponent } from './views/registro/registro.component';
import { SmJ1Component } from './views/inicio/sm-j1/sm-j1.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { SmFrComponent } from './views/inicio/sm-fr/sm-fr.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    NavbarComponent,
    CarouselComponent,
    CategoriasComponent,
    AnunciosComponent,
    RegistroComponent,
    SmJ1Component,
    ContactoComponent,
    SmFrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
