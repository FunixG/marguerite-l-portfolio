import {ImageAndImageAbsModule} from "./abstract/image-and-image-abs-module";

export class DoubleImagePortraitModule extends ImageAndImageAbsModule {

    constructor(
        firstImageId: string = '',
        altFirstImage: string = '',
        secondImageId: string = '',
        altSecondImage: string = ''
    ) {
        super('double-image-portrait-module', true, firstImageId, altFirstImage, secondImageId, altSecondImage);
    }

    static fromJson(data: string): DoubleImagePortraitModule {
        let jsonData = JSON.parse(data);

        return new DoubleImagePortraitModule(
            jsonData.firstImageId ?? '',
            jsonData.altFirstImage ?? '',
            jsonData.secondImageId ?? '',
            jsonData.altSecondImage ?? ''
        );
    }

}