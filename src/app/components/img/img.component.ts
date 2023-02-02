import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent  implements OnInit, OnChanges, AfterViewInit, OnDestroy {
 @Input() img: string = '';
 @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.jpg';

 constructor() {
  console.log('constructor', 'imgValue =>', this.img);

 }

 ngOnChanges () {
 console.log('ngOnChanges', 'imgValue =>', this.img);
 }

 ngOnInit (): void {
  console.log('ngOnInit', 'imgValue =>', this.img);
 }

 ngAfterViewInit () {
 console.log('ngAfterViewInit');
 }

 ngOnDestroy () {
  console.log('ngOnDestroy');
 }

 imgError () {
  this.img = this.imageDefault
 }

 imgLoaded() {
  console.log('log hijo');
  this.loaded.emit(this.img);
 }
}
