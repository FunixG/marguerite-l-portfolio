import {Component} from '@angular/core';
import {ModuleComponent} from "../module.component";
import {SingleImageModule} from "../../../../../services/projects/modules/single-image-module";
import {ProjectMediaDto, ProjectMediaType} from "../../../../../dtos/projects/project-media-dto";
import ProjectsMediasService from "../../../../../services/projects/projects-medias-service";

@Component({
  selector: 'app-admin-image-module',
  templateUrl: './admin-image-module.component.html',
  standalone: false
})
export class AdminImageModuleComponent extends ModuleComponent<SingleImageModule> {

  image?: ProjectMediaDto

  onLoadedModule(module: SingleImageModule): void {
    if (module.imageId) {
      this.mediaService.getById(module.imageId).subscribe({
        next: (media) => {
          this.image = media;
          this.cdRef.detectChanges();
        },
        error: (err) => {
          alert("Erreur de chargement de l'image : " + err.message)
        }
      })
    }
  }

  openImageSelection() {
    if (!this.module) return;

    this.mediaModalService.openModal((media) => {
      if (!media.id || !this.module) return;
      if (media.mediaType !== ProjectMediaType.IMAGE) {
        alert("Veuillez sélectionner une image.")
        return;
      }

      this.image = media
      this.module.imageId = media.id
      this.module.altImage = media.mediaDescription

      this.determineImageOrientation()
      this.alignCenterImage()
    })
  }

  alignCenterImage() {
    if (!this.module) return;

    this.module.imgCenter = true
    this.module.imgLeft = false
    this.module.imgRight = false
  }

  alignRightImage() {
    if (!this.module) return;

    this.module.imgCenter = false
    this.module.imgLeft = false
    this.module.imgRight = true
  }

  alignLeftImage() {
    if (!this.module) return;

    this.module.imgCenter = false
    this.module.imgLeft = true
    this.module.imgRight = false
  }

  /**
   * Load the image and calculate if the image is in portrait or landscape mode
   * @private
   */
  private determineImageOrientation() {
    if (!this.module?.imageId) return;

    const imageUrl: string = ProjectsMediasService.getMediaUrl(this.module.imageId)
    const img = new Image();

    img.onload = () => {
      if (!this.module) return
      this.module.imgPortrait = img.naturalHeight > img.naturalWidth;
    };

    img.onerror = () => {
      if (!this.module) return
      this.module.imgPortrait = false;
      alert("Impossible de charger l'image pour détecter son orientation.");
    };

    img.src = imageUrl;
  }

}
