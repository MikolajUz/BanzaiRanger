import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-range-viewer',
  templateUrl: './range-viewer.component.html',
  styleUrl: './range-viewer.component.scss',
})
export class RangeViewerComponent {
  @Input() selectedImage: string = '';
}
