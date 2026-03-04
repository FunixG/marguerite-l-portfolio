import {Component, Input} from '@angular/core';
import {ProjectDto} from "../../../../dtos/projects/project-dto";

@Component({
  selector: 'app-admin-project-row',
  templateUrl: './admin-project-row.component.html',
  standalone: false
})
export class AdminProjectRowComponent {

  @Input() project: ProjectDto = new ProjectDto();

}
