import { Component } from '@angular/core';
import { product } from "../../models/product.model";

import { StoreService } from "../../services/store.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  myShoppingCart: product[] = [];

  total = 0;

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

  constructor(
    private storeService: StoreService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit():void {
  }

  onAddToShoppingCart(product:product) {
    this.myShoppingCart.push(product);
    this.total = this.storeService.getTotal();

  }
}
