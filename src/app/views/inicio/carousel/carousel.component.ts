import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = ['carousel1.webp', 'carousel2.webp', 'adidas.webpx'].map((imageName) => `././././assets/img/${imageName}`);
}