import { Component } from '@angular/core';

import { product } from "./models/product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  products : product[] = [
    {
      id: '1',
      name:'El mejor juguete',
      price:565,
      image:'./assets/images/toy.jpg',
    },
    {
      id: '2',
      name:'Bicicleta casi nueva',
      price:356,
      image:'./assets/images/bike.jpg',
    },
    {
      id: '3',
      name:'Coleccion de albumnes',
      price:34,
      image:'./assets/images/album.jpg',
    },
    {
      id: '4',
      name:'Mis libros',
      price:23,
      image:'./assets/images/books.jpg',
    },
  ];

  onLoaded(img: string) {
    console.log('log padre', img);
  }
}
