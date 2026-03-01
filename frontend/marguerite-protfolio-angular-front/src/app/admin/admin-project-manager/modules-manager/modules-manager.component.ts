import {Component, HostListener} from '@angular/core';
import ProjectsService from "../../../../services/projects/projects-service";
import {ImageAndImageModule} from "../../../../services/projects/modules/image-and-image-module";
import {ImageAndTextModule} from "../../../../services/projects/modules/image-and-text-module";
import {TextAndImageModule} from "../../../../services/projects/modules/text-and-image-module";
import {TextProjectModule} from "../../../../services/projects/modules/text-project-module";
import {VideoModule} from "../../../../services/projects/modules/video-module";

@Component({
  selector: 'app-modules-manager',
  templateUrl: './modules-manager.component.html',
  styleUrl: './modules-manager.component.css',
  standalone: false
})
export class ModulesManagerComponent {

  menuOpened: boolean = false;

  constructor(private readonly projectsService: ProjectsService) {
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.menuOpened = !this.menuOpened;
    }
  }

  addModule(name: string): void {
    switch (name) {
      case new ImageAndImageModule().moduleName:
        this.projectsService.modules.push(new ImageAndImageModule());
        break;
      case new ImageAndTextModule().moduleName:
        this.projectsService.modules.push(new ImageAndTextModule());
        break;
      case new TextAndImageModule().moduleName:
        this.projectsService.modules.push(new TextAndImageModule());
        break;
      case new TextProjectModule().moduleName:
        this.projectsService.modules.push(new TextProjectModule());
        break;
      case new VideoModule().moduleName:
        this.projectsService.modules.push(new VideoModule());
        break;

      default:
        console.warn("Unknown module name: " + name);
    }
  }

}
