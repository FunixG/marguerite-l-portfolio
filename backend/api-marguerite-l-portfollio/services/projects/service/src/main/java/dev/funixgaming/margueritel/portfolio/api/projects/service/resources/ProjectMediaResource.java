package dev.funixgaming.margueritel.portfolio.api.projects.service.resources;

import dev.funixgaming.margueritel.portfolio.api.projects.api.dtos.ProjectMediaDTO;
import dev.funixgaming.margueritel.portfolio.api.projects.service.services.ProjectMediaService;
import dev.funixgaming.spring.core.storage.ressources.ApiStorageResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/projects/media")
public class ProjectMediaResource extends ApiStorageResource<ProjectMediaDTO, ProjectMediaService> {

    public ProjectMediaResource(ProjectMediaService service) {
        super(service);
    }

}
