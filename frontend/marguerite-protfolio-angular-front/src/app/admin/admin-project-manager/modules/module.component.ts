import {BaseProjectModule} from "../../../../services/projects/modules/base-project-module";
import {Directive, Input, OnInit} from "@angular/core";
import ProjectsService from "../../../../services/projects/projects-service";
import ProjectsMediasService from "../../../../services/projects/projects-medias-service";

@Directive()
export abstract class ModuleComponent<T extends BaseProjectModule> implements OnInit {
    @Input() moduleId!: string

    protected readonly projectsService: ProjectsService;
    protected readonly mediaService: ProjectsMediasService;

    module?: T

    constructor(projectsService: ProjectsService,
                mediaService: ProjectsMediasService) {
        this.projectsService = projectsService;
        this.mediaService = mediaService;
    }

    ngOnInit(): void {
        let module: T | undefined = this.projectsService.getModuleById(this.moduleId);

        if (module) {
            this.module = module;
        }
    }

    removeModule() {
        if (this.module) {
            this.projectsService.modules.splice(this.projectsService.modules.indexOf(this.module), 1);
        }
    }

}