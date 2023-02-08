import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { product } from "../../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: product = {
    id: '',
    price: 0,
    name: '',
    image: '',
  };

  @Output() addedProduct = new EventEmitter<product>();

  constructor() {}

  ngOnInit (): void {
  }

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }
}
