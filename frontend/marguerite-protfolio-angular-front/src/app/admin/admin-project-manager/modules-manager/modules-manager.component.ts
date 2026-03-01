import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-modules-manager',
  templateUrl: './modules-manager.component.html',
  styleUrl: './modules-manager.component.css',
  standalone: false
})
export class ModulesManagerComponent {

  menuOpened: boolean = false;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.menuOpened = !this.menuOpened;
    }
  }

}
