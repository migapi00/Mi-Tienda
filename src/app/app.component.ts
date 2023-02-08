import { Component } from '@angular/core';

import { product } from "./models/product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true


  onLoaded(img: string) {
    console.log('log padre', img);
  }
  toogleImg(){
    this.showImg = !this.showImg;
  }
}
