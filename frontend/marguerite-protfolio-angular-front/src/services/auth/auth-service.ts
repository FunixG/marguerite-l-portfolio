import {Injectable} from "@angular/core";
import {GenericHttpClient} from "../../lib/requests/generic-http-client";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {PasswordRequestDTO} from "../../dtos/auth/password-request-dto";
import {catchError, throwError} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export default class AuthService extends GenericHttpClient {

    private readonly path

    constructor(private readonly httpClient: HttpClient) {
        super()
        this.path = environment.apiUrl + '/auth'
    }

    login(password: string, onSuccess: () => {}, onFail: (err: HttpErrorResponse) => {}): void {
        this.httpClient.post<string>(this.path + '/login', password, {headers: {
                'Content-Type': 'application/json'
        }})
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => this.buildErrorDto(error))
                })
            )
            .subscribe({
                next: (token: string) => {
                    if (typeof localStorage !== 'undefined') {
                        localStorage.setItem(GenericHttpClient.accessTokenLocalStorageName, token)
                    }
                    onSuccess()
                },
                error: (err: HttpErrorResponse) => {
                    onFail(err)
                }
            })
    }

    setPassword(request: PasswordRequestDTO, onSuccess: () => {}, onFail: (err: HttpErrorResponse) => {}): void {
        this.httpClient.post<void>(this.path + '/setPassword', request, {headers: super.getHeaders()})
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(() => this.buildErrorDto(error))
                })
            )
            .subscribe({
                next: () => {
                    onSuccess()
                },
                error: (err: HttpErrorResponse) => {
                    onFail(err)
                }
            })
    }

}