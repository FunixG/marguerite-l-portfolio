package dev.funixgaming.margueritel.portfolio.api.projects.service.services;

import dev.funixgaming.margueritel.portfolio.api.projects.api.dtos.ProjectDTO;
import dev.funixgaming.margueritel.portfolio.api.projects.service.entities.Project;
import dev.funixgaming.margueritel.portfolio.api.projects.service.mappers.ProjectMapper;
import dev.funixgaming.margueritel.portfolio.api.projects.service.repositories.ProjectRepository;
import dev.funixgaming.spring.core.crud.services.ApiService;
import org.springframework.stereotype.Service;

@Service
public class ProjectService extends ApiService<ProjectDTO, Project, ProjectMapper, ProjectRepository> {

    public ProjectService(ProjectRepository repository, ProjectMapper mapper) {
        super(repository, mapper);
    }

}
