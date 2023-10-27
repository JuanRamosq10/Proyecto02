import { Component, OnInit } from '@angular/core';
import { Zapatillas } from 'src/app/shared/interfaces/zapatilla';
import { ApiService } from 'src/app/shared/api-service.service';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit {

  zapatilla: Zapatillas | null = null;
  
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getselectedZapatilla$().subscribe((zapatilla) => {
      this.zapatilla = zapatilla;
    });
  }
}