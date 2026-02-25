package dev.funixgaming.margueritel.portfolio.api.projects.api.dtos;

import dev.funixgaming.spring.core.crud.dtos.ApiDTO;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProjectDTO extends ApiDTO {

    @NotBlank(message = "Le titre du projet ne peut pas être vide")
    private String title;

    @NotBlank(message = "La description du projet ne peut pas être vide")
    private String description;

    @NotBlank(message = "Le chemin du projet ne peut pas être vide")
    private String path;

    @NotNull(message = "La visibilité du projet ne peut pas être nulle")
    private Boolean isVisible;

    /**
     * Structure du projet en HTML, utilisée pour afficher le projet sur le portfolio.
     */
    @NotBlank(message = "Le code HTML du projet ne peut pas être vide")
    private String htmlCode;

    /**
     * Structure du projet en JSON, utilisée pour stocker la structure du projet dans la base de données.
     */
    @NotBlank(message = "Le code JSON du projet ne peut pas être vide")
    private String jsonCode;

    @NotBlank(message = "Le média de couverture du projet ne peut pas être nul")
    private String coverMediaId;

}
