package dev.funixgaming.margueritel.portfolio.api.projects.service.mappers;

import dev.funixgaming.margueritel.portfolio.api.projects.api.dtos.ProjectMediaDTO;
import dev.funixgaming.margueritel.portfolio.api.projects.service.entities.ProjectMedia;
import dev.funixgaming.spring.core.crud.mappers.ApiMapper;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ProjectMediaMapper extends ApiMapper<ProjectMedia, ProjectMediaDTO> {
}
