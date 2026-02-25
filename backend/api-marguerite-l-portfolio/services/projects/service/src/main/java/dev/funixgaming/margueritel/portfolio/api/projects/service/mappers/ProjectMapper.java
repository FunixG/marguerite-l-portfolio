package dev.funixgaming.margueritel.portfolio.api.projects.service.mappers;

import dev.funixgaming.margueritel.portfolio.api.projects.api.dtos.ProjectDTO;
import dev.funixgaming.margueritel.portfolio.api.projects.service.entities.Project;
import dev.funixgaming.spring.core.crud.mappers.ApiMapper;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ProjectMapper extends ApiMapper<Project, ProjectDTO> {
}
