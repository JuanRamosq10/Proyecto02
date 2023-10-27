import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatosZapatilla } from 'src/app/shared/interfaces/zapatilla';
import { ApiService } from 'src/app/shared/api-service.service';

@Component({
  selector: 'app-sm-fr',
  templateUrl: './sm-fr.component.html',
  styleUrls: ['./sm-fr.component.css']
})

export class SmFrComponent {
 constructor(private ApiService: ApiService ){
  
 }
  enviarDatos(){
    const zapatilla: DatosZapatilla = {
      img: "../../../../assets/img/forum.jpg",
      nombre: "Adidas Forum",
      descripcion: "¡Prepárate para darle a tu estilo un impulso increíble con las Adidas Forum! Estas zapatillas emblemáticas no solo te brindan un toque de autenticidad, sino que también te envuelven en comodidad y versatilidad sin igual.Las Adidas Forum combinan la nostalgia de su diseño clásico de baloncesto con detalles modernos, creando un calzado que grita cool en cada paso. Ya sea que las uses para patear las calles o para destacar en una noche especial, estas zapatillas te aseguran un aspecto fresco y a la moda.La comodidad es clave: la suela intermedia de EVA y la tecnología de amortiguación te brindan apoyo durante todo el día, sin importar cuánto camines o te mantengas en movimiento.Pero hay algo más que hace que las Adidas Forum sean excepcionales: la historia y la cultura urbana que las rodean. Al ponértelas, te unes a una tradición de estilo que ha sido adoptada por generaciones de amantes de la moda.Entonces, ¿estás listo para elevar tu juego de moda? Hazlo con las Adidas Forum y prepárate para recibir miradas de admiración. ¡Consigue las tuyas ahora y marca tendencia en cada esquina!"

    }
    console.log(zapatilla)
    this.ApiService.setZapatilla(zapatilla)
  }
}
