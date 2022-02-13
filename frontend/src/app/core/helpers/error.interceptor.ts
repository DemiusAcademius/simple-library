// The Error Interceptor intercepts http responses from the api to check if there were any errors.
// If there is a 401 Unauthorized response the user is automatically logged out of the application,
// all other errors are re-thrown up to the calling service so an alert with the error can be displayed on the screen.

// It's implemented using the HttpInterceptor class included in the HttpClientModule,
// by extending the HttpInterceptor class you can create a custom interceptor
// to catch all error responses from the server in a single location.

// Http interceptors are added to the request pipeline in the providers section of the app.work.module.ts file.

// TODO: Notification service !!!

import { Injectable } from '@angular/core'
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { AuthenticationService } from '../services/authentication.service'
// import { NotificationService } from '../../services/notification.service'

const ERR_HTTP_REQUEST_INVALID_TEXT = 'Solicitarea catre server contine erori'
const ERR_RESOURCE_NOTFOUND_TEXT = 'Resursa nu a fost gasita pe server'
const ERR_INTERNAL_ERROR_TEXT = 'Eroare internala la server'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(catchError(err => {

            if (err.status === 401) {
                return this.authenticationService.handleError(err)
            } else {
                let errorText = ''

                switch (err.status) {
                    case 400: errorText = ERR_HTTP_REQUEST_INVALID_TEXT; break
                    case 404: errorText = ERR_RESOURCE_NOTFOUND_TEXT; break
                    case 500: errorText = ERR_INTERNAL_ERROR_TEXT; break
                    default: errorText = err.error.message || err.statusText
                }

                // TODO: Notification service !!!
                // NotificationService.error(errorText)
                return throwError(() => new Error(errorText))
            }
        }))
    }
}
