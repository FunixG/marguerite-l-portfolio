import {Component} from '@angular/core';
import ProjectsService from "../../../../services/projects/projects-service";

@Component({
  selector: 'app-project-title',
  templateUrl: './project-title.component.html',
  styleUrl: './project-title.component.css',
  standalone: false
})
export class ProjectTitleComponent {

  constructor(protected readonly projectsService: ProjectsService) {
  }

}
