import {ImageAndImageAbsModule} from "./abstract/image-and-image-abs-module";

export class DoubleImageLandscapeModule extends ImageAndImageAbsModule {

    constructor(
        firstImageId: string = '',
        altFirstImage: string = '',
        secondImageId: string = '',
        altSecondImage: string = ''
    ) {
        super('double-image-landscape-module', false, firstImageId, altFirstImage, secondImageId, altSecondImage);
    }

    static fromJson(data: string): DoubleImageLandscapeModule {
        let jsonData = JSON.parse(data);

        return new DoubleImageLandscapeModule(
            jsonData.firstImageId ?? '',
            jsonData.altFirstImage ?? '',
            jsonData.secondImageId ?? '',
            jsonData.altSecondImage ?? ''
        );
    }

}