import ProjectsMediasService from "../projects-medias-service";
import {ProjectModule} from "./abstract/base-project-module";

export class SingleImageModule extends ProjectModule {

    imgCenter: boolean
    imgLeft: boolean
    imgRight: boolean
    imgPortrait: boolean

    imageId: string
    altImage: string

    constructor(
        imgCenter: boolean = true,
        imgLeft: boolean = false,
        imgRight: boolean = false,
        imgPortrait: boolean = false,
        imageId: string = '',
        altImage: string = ''
    ) {
        super('single-image-module')
        this.imgCenter = imgCenter
        this.imgLeft = imgLeft
        this.imgRight = imgRight
        this.imgPortrait = imgPortrait

        this.imageId = imageId
        this.altImage = altImage
    }

    getHtml(): string {
        const imageHtml = `<img class="${this.imgPortrait ? 'portrait-image' : 'landscape-image'}" src="${ProjectsMediasService.getMediaUrl(this.imageId)}" alt="${this.altImage}" />`
        const emptySquare = `<div class="empty-square"></div>`

        if (this.imgLeft) {
            return `<div class="${super.getType()}">${imageHtml + emptySquare}</div>`
        } else if (this.imgRight) {
            return `<div class="${super.getType()}">${emptySquare + imageHtml}</div>`
        } else {
            return `<div class="${super.getType()}">${emptySquare + imageHtml + emptySquare}</div>`
        }
    }

    toJsonData(): string {
        return JSON.stringify({
            imageId: this.imageId,
            altImage: this.altImage,

            imgCenter: this.imgCenter,
            imgLeft: this.imgLeft,
            imgRight: this.imgRight,
            imgPortrait: this.imgPortrait
        });
    }

    static fromJson(data: string): SingleImageModule {
        let jsonData = JSON.parse(data);
        return new SingleImageModule(
            jsonData.imgCenter ?? true,
            jsonData.imgLeft ?? false,
            jsonData.imgRight ?? false,
            jsonData.imgPortrait ?? false,
            jsonData.imageId ?? '',
            jsonData.altImage ?? ''
        );
    }

}
