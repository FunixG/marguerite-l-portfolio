import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrl: './image-preview.component.css',
  standalone: false
})
export class ImagePreviewComponent {

  @Input() isPortrait: boolean = false;

}
