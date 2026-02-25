package dev.funixgaming.margueritel.portfolio.api.projects.service.services;

import dev.funixgaming.margueritel.portfolio.api.projects.api.dtos.ProjectMediaDTO;
import dev.funixgaming.margueritel.portfolio.api.projects.service.entities.ProjectMedia;
import dev.funixgaming.margueritel.portfolio.api.projects.service.mappers.ProjectMediaMapper;
import dev.funixgaming.margueritel.portfolio.api.projects.service.repositories.ProjectMediaRepository;
import dev.funixgaming.spring.core.storage.services.ApiStorageService;
import org.springframework.stereotype.Service;

@Service
public class ProjectMediaService extends ApiStorageService<ProjectMediaDTO, ProjectMedia, ProjectMediaMapper, ProjectMediaRepository> {

    public ProjectMediaService(ProjectMediaRepository repository, ProjectMediaMapper mapper) {
        super("project-media-service", "data", repository, mapper);
    }

}
