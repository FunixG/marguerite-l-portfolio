import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminComponent} from "./admin.component";
import {AdminLoginComponent} from "./admin-login/admin-login.component";
import {AdminProjectManagerComponent} from "./admin-project-manager/admin-project-manager.component";
import {AdminProjectsListComponent} from "./admin-projects-list/admin-projects-list.component";
import {ButtonComponent} from "../components/button/button.component";
import {InputTextComponent} from "../components/inputs/input-text/input-text.component";
import {LoaderComponent} from "../components/loader/loader.component";
import {PasswordComponent} from "./password/password.component";
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";
import {
    AdminDoubleImagePortraitModuleComponent
} from "./admin-project-manager/modules/admin-double-image-portrait-module/admin-double-image-portrait-module.component";
import {
    AdminVideoModuleComponent
} from "./admin-project-manager/modules/admin-video-module/admin-video-module.component";
import {ProjectTitleComponent} from "./admin-project-manager/project-title/project-title.component";
import {ProjectDescriptionComponent} from "./admin-project-manager/project-description/project-description.component";
import {ProjectCoverImageComponent} from "./admin-project-manager/project-cover-image/project-cover-image.component";
import {FormsModule} from "@angular/forms";
import {ModulesManagerComponent} from "./admin-project-manager/modules-manager/modules-manager.component";
import {ImagePreviewComponent} from "./admin-project-manager/previews/image-preview/image-preview.component";
import {VideoPreviewComponent} from "./admin-project-manager/previews/video-preview/video-preview.component";
import {
    AdminImageModuleComponent
} from "./admin-project-manager/modules/admin-image-module/admin-image-module.component";
import {
    AdminProjectMediasManagerComponent
} from "./admin-project-medias-manager/admin-project-medias-manager.component";
import AdminProjectMediasManagerService from "./admin-project-medias-manager/admin-project-medias-manager.service";
import {MediaComponent} from "../components/image/media/media.component";
import {InputParagraphTextComponent} from "../components/inputs/input-paragraph-text/input-paragraph-text.component";
import {AdminProjectRowComponent} from "./admin-projects-list/admin-project-row/admin-project-row.component";
import {InputCheckboxComponent} from "../components/inputs/input-checkbox/input-checkbox.component";
import {
    AdminDoubleImageLandscapeModuleComponent
} from "./admin-project-manager/modules/admin-double-image-landscape-module/admin-double-image-landscape-module.component";

@NgModule({
    declarations: [
        AdminComponent,
        AdminLoginComponent,
        AdminProjectManagerComponent,
        AdminProjectsListComponent,
        PasswordComponent,
        AdminDoubleImagePortraitModuleComponent,
        AdminDoubleImageLandscapeModuleComponent,
        AdminImageModuleComponent,
        AdminVideoModuleComponent,
        ProjectTitleComponent,
        ProjectDescriptionComponent,
        ProjectCoverImageComponent,
        ModulesManagerComponent,
        ImagePreviewComponent,
        VideoPreviewComponent,
        AdminProjectMediasManagerComponent,
        AdminProjectRowComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ButtonComponent,
        InputTextComponent,
        LoaderComponent,
        ButtonComponent,
        CdkDrag,
        CdkDropList,
        FormsModule,
        MediaComponent,
        InputParagraphTextComponent,
        InputCheckboxComponent
    ],
    providers: [
        AdminProjectMediasManagerService
    ]
})
export class AdminModule { }
