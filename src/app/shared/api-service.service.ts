import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { DatosZapatilla } from './interfaces/zapatilla';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  initZapatilla!: DatosZapatilla
  private zapatilla$ = new BehaviorSubject<DatosZapatilla>(this.initZapatilla)
 
  getselectedZapatilla$(): Observable<DatosZapatilla> {
    return this.zapatilla$.asObservable();
  }

  setZapatilla(zapatilla: DatosZapatilla): void {
    this.zapatilla$.next(zapatilla);
  }
}
