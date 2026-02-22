package dev.funixgaming.margueritel.portfolio.api.projects.service.resources;

import dev.funixgaming.margueritel.portfolio.api.projects.api.dtos.ProjectDTO;
import dev.funixgaming.margueritel.portfolio.api.projects.service.services.ProjectService;
import dev.funixgaming.spring.core.crud.resources.ApiResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/projects")
public class ProjectResource extends ApiResource<ProjectDTO, ProjectService> {

    public ProjectResource(ProjectService service) {
        super(service);
    }

}
