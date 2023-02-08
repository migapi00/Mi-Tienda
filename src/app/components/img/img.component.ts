import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent  implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img =>', this.img);
  }

 @Input() alt: string = '';

 @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.jpg';

  // counter = 0;
  // counterFn: number | undefined;

 constructor() {
  console.log('constructor', 'imgValue =>', this.img);

 }

 ngOnChanges(changes:SimpleChanges) {
 console.log('ngOnChanges', 'imgValue =>', this.img);
 console.log('changes', changes)
 }

 ngOnInit (): void {
  console.log('ngOnInit', 'imgValue =>', this.img);
  // this.counterFn = window.setInterval(()=> {
  //   this.counter +=1;
  //   console.log("run counter")
  // }, 1000)
 }

 ngAfterViewInit () {
 console.log('ngAfterViewInit');
 }

 ngOnDestroy () {
  console.log('ngOnDestroy');
  // window.clearInterval(this.counterFn);
 }

 imgError () {
  this.img = this.imageDefault
 }

 imgLoaded() {
  console.log('log hijo');
  this.loaded.emit(this.img);
 }
}
