import {BaseProjectModule} from "../../../../services/projects/modules/base-project-module";
import {Directive, Input, OnInit} from "@angular/core";
import ProjectsService from "../../../../services/projects/projects-service";
import ProjectsMediasService from "../../../../services/projects/projects-medias-service";
import AdminProjectMediasManagerService from "../../admin-project-medias-manager/admin-project-medias-manager.service";

@Directive()
export abstract class ModuleComponent<T extends BaseProjectModule> implements OnInit {
    @Input() moduleId!: string

    protected readonly projectsService: ProjectsService;
    protected readonly mediaService: ProjectsMediasService;
    protected readonly mediaModalService: AdminProjectMediasManagerService;

    protected module?: T

    constructor(projectsService: ProjectsService,
                mediaService: ProjectsMediasService,
                mediaModalService: AdminProjectMediasManagerService) {
        this.projectsService = projectsService;
        this.mediaService = mediaService;
        this.mediaModalService = mediaModalService;
    }

    abstract onLoadedModule(module: T): void

    ngOnInit(): void {
        let module: T | undefined = this.projectsService.getModuleById(this.moduleId);

        if (module) {
            this.module = module;
            this.onLoadedModule(module);
        }
    }

    removeModule() {
        if (this.module) {
            this.projectsService.modules.splice(this.projectsService.modules.indexOf(this.module), 1);
        }
    }

}