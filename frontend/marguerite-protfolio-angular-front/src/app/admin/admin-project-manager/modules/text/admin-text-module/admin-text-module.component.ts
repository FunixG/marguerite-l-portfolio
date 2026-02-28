import {Component, Input, OnInit} from '@angular/core';
import ProjectsService from "../../../../../../services/projects/projects-service";
import {TextProjectModule} from "../../../../../../services/projects/modules/text/text-project-module";

@Component({
  selector: 'app-admin-text-module',
  templateUrl: './admin-text-module.component.html',
  styleUrl: './admin-text-module.component.css',
  standalone: false
})
export class AdminTextModuleComponent implements OnInit {
  @Input() moduleId!: string

  module: TextProjectModule = new TextProjectModule();

  constructor(private readonly projectsService: ProjectsService) {
  }

  ngOnInit(): void {
    let module = this.projectsService.getModuleById(this.moduleId);

    if (module instanceof TextProjectModule) {
      this.module = module;
    }
  }
}
