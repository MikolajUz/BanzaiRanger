import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-image',
  templateUrl: './button-image.component.html',
  styleUrl: './button-image.component.scss'
})
export class ButtonImageComponent {
  @Input() path:string=''
  @Output() imageSelected = new EventEmitter<string>();

  selectImage(imagePath: string): void {
    this.imageSelected.emit(imagePath);
    console.log('imagePath',imagePath)
  }
}