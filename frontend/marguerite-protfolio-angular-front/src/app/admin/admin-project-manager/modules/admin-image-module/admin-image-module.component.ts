import {Component} from '@angular/core';
import {ModuleComponent} from "../module.component";
import {ImageModule} from "../../../../../services/projects/modules/image-module";

@Component({
  selector: 'app-admin-image-module',
  templateUrl: './admin-image-module.component.html',
  standalone: false
})
export class AdminImageModuleComponent extends ModuleComponent<ImageModule> {

}
