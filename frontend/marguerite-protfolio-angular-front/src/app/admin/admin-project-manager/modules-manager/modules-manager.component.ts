import {Component, ElementRef, HostListener} from '@angular/core';
import ProjectsService from "../../../../services/projects/projects-service";
import {VideoModule} from "../../../../services/projects/modules/video-module";
import {SingleImageModule} from "../../../../services/projects/modules/single-image-module";
import {DoubleImagePortraitModule} from "../../../../services/projects/modules/double-image-portrait-module";
import {DoubleImageLandscapeModule} from "../../../../services/projects/modules/double-image-landscape-module";

@Component({
  selector: 'app-modules-manager',
  templateUrl: './modules-manager.component.html',
  styleUrl: './modules-manager.component.css',
  standalone: false
})
export class ModulesManagerComponent {

  menuOpened: boolean = false;

  constructor(private readonly projectsService: ProjectsService,
              private readonly elementRef: ElementRef) {
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.menuOpened = !this.menuOpened;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;
    if (!target) {
      return;
    }
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside && this.menuOpened) {
      this.menuOpened = false;
    }
  }

  addModule(name: string): void {
    switch (name) {
      case new DoubleImagePortraitModule().moduleName:
        this.projectsService.modules.push(new DoubleImagePortraitModule());
        break;
      case new DoubleImageLandscapeModule().moduleName:
        this.projectsService.modules.push(new DoubleImageLandscapeModule());
        break;
      case new VideoModule().moduleName:
        this.projectsService.modules.push(new VideoModule());
        break;
      case new SingleImageModule().moduleName:
        this.projectsService.modules.push(new SingleImageModule());
        break;

      default:
        console.warn("Unknown module name: " + name);
    }
  }

}
