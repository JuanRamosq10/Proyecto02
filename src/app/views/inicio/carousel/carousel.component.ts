import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = ['zapatilla1.jpeg', 'zapatillas2.jpg', 'zapatilla3.jpeg'].map((imageName) => `././././assets/img/${imageName}`);
}