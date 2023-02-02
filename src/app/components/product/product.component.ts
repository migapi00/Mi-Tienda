import { Component, OnInit, Input } from '@angular/core';

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
  constructor() {}
  ngOnInit (): void {
  }

}
