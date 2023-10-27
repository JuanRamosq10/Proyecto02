import { Component, Input, OnInit } from '@angular/core';
import { Zapatillas } from 'src/app/shared/interfaces/zapatilla';
import { ApiService } from 'src/app/shared/api-service.service';
@Component({
  selector: 'app-sm-j1',
  templateUrl: './sm-j1.component.html',
  styleUrls: ['./sm-j1.component.css']

})
export class SmJ1Component{
  constructor(private apiService: ApiService){}

  enviarDatos(){
    const zapatilla: Zapatillas = {
      nombre: 'Jordan 1 University Blue',
      descripcion: '¡Descubre el auténtico espíritu de la moda urbana con las Jordan 1 University Blue! Estas zapatillas icónicas te llevarán a nuevas alturas de estilo y rendimiento.Las Jordan 1 University Blue son un homenaje a la herencia del baloncesto, combinando un diseño clásico con una paleta de colores fresca y atrevida. El tono azul universitario te hará destacar en la multitud y te asegurará que no pases desapercibido.Construidas con materiales de alta calidad, estas zapatillas te brindan una comodidad excepcional durante todo el día. La suela Air-Sole encapsulada en el talón proporciona una amortiguación inigualable, perfecta para tus aventuras diarias o para brillar en la cancha.Las Jordan 1 University Blue no son solo un par de zapatillas; son una declaración de estilo, una forma de vida. Combínalas con tu atuendo favorito para un look fresco y contemporáneo que te hará destacar en cualquier lugar al que vayas.No pierdas la oportunidad de añadir estas joyas a tu colección de zapatillas. Las Jordan 1 University Blue son un símbolo de autenticidad, historia y estilo de vida. ¡Consíguelas ahora y eleva tu juego de moda a un nivel completamente nuevo!',
      img:'../../../../assets/img/Jordan1.jpg',
    };
    this.apiService.setZapatilla(zapatilla);
  }
}
