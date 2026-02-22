package dev.funixgaming.margueritel.portfolio.api.projects.api.dtos;

import dev.funixgaming.margueritel.portfolio.api.projects.api.enums.ProjectMediaType;
import dev.funixgaming.spring.core.storage.dtos.ApiStorageFileDTO;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProjectMediaDTO extends ApiStorageFileDTO {

    @NotBlank(message = "La description du média ne peut pas être vide")
    private String mediaDescription;

    @NotNull(message = "Le type de média ne peut pas être nul")
    private ProjectMediaType mediaType;

}
