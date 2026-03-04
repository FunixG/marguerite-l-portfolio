import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input-paragraph-text',
  imports: [],
  templateUrl: './input-paragraph-text.component.html',
  styleUrl: './input-paragraph-text.component.css',
})
export class InputParagraphTextComponent {

  @Input() text: string = ""
  @Input() placeholder: string = "Entre la description du projet"
  @Output() textChange = new EventEmitter<string>()

}
