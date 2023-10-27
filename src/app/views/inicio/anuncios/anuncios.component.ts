import { Component, OnInit } from '@angular/core';
import { DatosZapatilla } from 'src/app/shared/interfaces/zapatilla';
import { ApiService } from 'src/app/shared/api-service.service';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit{

  zapatilla: DatosZapatilla | null = null;

  constructor(private ApiService: ApiService) {}

  ngOnInit(){
    this.ApiService.getselectedZapatilla$().subscribe((zapatilla) => {
      this.zapatilla = zapatilla;
    })
  }
}
