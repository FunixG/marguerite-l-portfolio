import {CrudHttpClient} from "../../lib/requests/crud-http-client";
import {ProjectDto} from "../../dtos/projects/project-dto";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export default class ProjectsService extends CrudHttpClient<ProjectDto> {

    constructor(http: HttpClient) {
        super(http, environment.apiUrl, '/projects');
    }

}