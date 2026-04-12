import {Component} from '@angular/core';
import {DoubleImagePortraitModule} from "../../../../../services/projects/modules/double-image-portrait-module";
import {DoubleImageModuleComponent} from "../double-image-module.component";

@Component({
  selector: 'app-admin-double-image-portrait-module',
  templateUrl: './admin-double-image-portrait-module.component.html',
  standalone: false
})
export class AdminDoubleImagePortraitModuleComponent extends DoubleImageModuleComponent<DoubleImagePortraitModule> {
}
