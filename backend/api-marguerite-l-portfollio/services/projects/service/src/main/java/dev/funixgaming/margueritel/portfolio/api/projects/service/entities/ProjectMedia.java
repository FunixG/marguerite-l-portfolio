package dev.funixgaming.margueritel.portfolio.api.projects.service.entities;

import dev.funixgaming.margueritel.portfolio.api.projects.api.enums.ProjectMediaType;
import dev.funixgaming.spring.core.storage.entities.ApiStorageFile;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "projects_medias")
public class ProjectMedia extends ApiStorageFile {

    @Column(nullable = false, name = "media_description")
    private String mediaDescription;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, name = "media_type")
    private ProjectMediaType mediaType;

}
