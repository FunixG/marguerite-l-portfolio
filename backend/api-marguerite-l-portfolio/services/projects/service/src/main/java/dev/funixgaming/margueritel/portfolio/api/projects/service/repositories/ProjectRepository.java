package dev.funixgaming.margueritel.portfolio.api.projects.service.repositories;

import dev.funixgaming.margueritel.portfolio.api.projects.service.entities.Project;
import dev.funixgaming.spring.core.crud.repositories.ApiRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends ApiRepository<Project> {
}
