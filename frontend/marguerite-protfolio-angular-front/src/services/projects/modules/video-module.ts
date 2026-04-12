import {ProjectModule} from "./abstract/base-project-module";
import ProjectsMediasService from "../projects-medias-service";

export class VideoModule extends ProjectModule {

    videoId: string;

    constructor(videoId: string = '') {
        super('video-module')
        this.videoId = videoId;
    }

    getHtml(): string {
        return `<div class="${super.getType()}"><video muted autoplay loop><source src="${ProjectsMediasService.getMediaUrl(this.videoId)}" type="video/mp4"></video></div>`;
    }

    toJsonData(): string {
        return JSON.stringify({
            videoId: this.videoId
        });
    }

    static fromJson(data: string): VideoModule {
        let jsonData = JSON.parse(data);
        return new VideoModule(jsonData.videoId ?? '');
    }

}