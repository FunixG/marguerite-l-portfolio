import {Component} from '@angular/core';
import {ModuleComponent} from "../module.component";
import {ImageAndTextModule} from "../../../../../services/projects/modules/image-and-text-module";
import {ProjectMediaDto} from "../../../../../dtos/projects/project-media-dto";

@Component({
  selector: 'app-admin-image-and-text-module',
  templateUrl: './admin-image-and-text-module.component.html',
  standalone: false
})
export class AdminImageAndTextModuleComponent extends ModuleComponent<ImageAndTextModule> {

  image?: ProjectMediaDto
  text: string = ""

  onLoadedModule(module: ImageAndTextModule): void {
    this.text = module.text || ""

    if (module.imageId) {
      this.mediaService.getById(module.imageId).subscribe({
        next: (media) => {
          this.image = media;
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

      this.image = media
      this.module.imageId = media.id
    })
  }

}
