import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { Zapatillas } from './interfaces/zapatilla';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  initZapatilla!: Zapatillas
  private zapatilla$ = new BehaviorSubject<Zapatillas>(this.initZapatilla)

  getselectedZapatilla$(): Observable<Zapatillas> {
    return this.zapatilla$.asObservable();
  }

  setZapatilla(zapatilla: Zapatillas): void {
    this.zapatilla$.next(zapatilla);
  }
}
