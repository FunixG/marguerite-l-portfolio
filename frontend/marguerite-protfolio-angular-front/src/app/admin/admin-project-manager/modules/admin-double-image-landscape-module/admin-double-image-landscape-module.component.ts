import {Component} from '@angular/core';
import {DoubleImageModuleComponent} from "../double-image-module.component";
import {DoubleImageLandscapeModule} from "../../../../../services/projects/modules/double-image-landscape-module";

@Component({
  selector: 'app-admin-double-image-landscape-module',
  templateUrl: './admin-double-image-landscape-module.component.html',
  standalone: false
})
export class AdminDoubleImageLandscapeModuleComponent extends DoubleImageModuleComponent<DoubleImageLandscapeModule> {
}
