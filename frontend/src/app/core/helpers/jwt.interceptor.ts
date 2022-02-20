import { Injectable } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'
import { Observable } from 'rxjs'
import { AuthenticationService } from '@app/core/services/authentication.service'

// The JWT Interceptor intercepts http requests from the application to add a JWT auth token to the Authorization header if the user is logged in.

// It's implemented using the HttpInterceptor class included in the HttpClientModule,
// by extending the HttpInterceptor class you can create a custom interceptor to modify http requests before they get sent to the server.

//  Http interceptors are added to the request pipeline in the providers section of the app.work.module.ts file.

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let accessToken = this.authenticationService.accessToken

        console.info(`JwtInterceptor, token: ${accessToken}, req: ${request.url}`)

        if (accessToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
        }

        return next.handle(request)
    }
}
