import {ProjectModule} from "./base-project-module";

export class ImageModule extends ProjectModule {

    imageId: string;

    constructor(imageId: string = '') {
        super('ImageModule')
        this.imageId = imageId;
    }

    getHtml(): string {
        return "";
    }

    toJsonData(): string {
        return JSON.stringify({
            imageId: this.imageId
        });
    }

    static fromJson(data: string): ImageModule {
        let jsonData = JSON.parse(data);
        return new ImageModule(jsonData.imageId);
    }

}
