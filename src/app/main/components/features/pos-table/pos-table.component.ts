import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pos-table',
  templateUrl: './pos-table.component.html',
  styleUrl: './pos-table.component.scss',
})
export class PosTableComponent {
  @Output() imageSelected = new EventEmitter<string>();
  @Input() title: string = '';
  @Input() columnNames: string[] = [];
  @Input() data: {}[] = [];

  handleImageSelected(imagePath: string): void {
    this.imageSelected.emit(imagePath);
  }
}
