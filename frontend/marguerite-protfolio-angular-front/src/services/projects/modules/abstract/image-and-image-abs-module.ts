import {ProjectModule} from "./base-project-module";
import ProjectsMediasService from "../../projects-medias-service";

export abstract class ImageAndImageAbsModule extends ProjectModule {

    firstImageId: string;
    altFirstImage: string;

    secondImageId: string;
    altSecondImage: string;

    private readonly isPortrait: boolean;

    protected constructor(
        moduleName: string,
        isPortrait: boolean,
        firstImageId: string = '',
        altFirstImage: string = '',
        secondImageId: string = '',
        altSecondImage: string = ''
    ) {
        super(moduleName)
        this.isPortrait = isPortrait;
        this.firstImageId = firstImageId;
        this.altFirstImage = altFirstImage;
        this.secondImageId = secondImageId;
        this.altSecondImage = altSecondImage;
    }

    getHtml(): string {
        const imgClass: string = this.isPortrait ? 'portrait-image' : 'landscape-image'

        return `<div class="${super.getType()}"><img class="${imgClass}" src="${ProjectsMediasService.getMediaUrl(this.firstImageId)}" alt="${this.altFirstImage}" /><img class="${imgClass}" src="${ProjectsMediasService.getMediaUrl(this.secondImageId)}" alt="${this.altSecondImage}" /></div>`;
    }

    toJsonData(): string {
        return JSON.stringify({
            firstImageId: this.firstImageId,
            altFirstImage: this.altFirstImage,
            secondImageId: this.secondImageId,
            altSecondImage: this.altSecondImage
        });
    }

}