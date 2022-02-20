import { Inject, Injectable } from '@angular/core'
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    CanLoad, Route
} from '@angular/router'

import { AuthenticationService } from './authentication.service'

// see: https://angular.io/guide/router-tutorial-toh#canload-guarding-unauthorized-loading-of-feature-modules
// see: https://angular.io/guide/router#preventing-unauthorized-access

// TODO: test roles !!!

@Injectable({
    providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private authService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url
        window.console.info(`AuthenticationGuard.canActivate, route: ${route.pathFromRoot}; url: ${url}`)
        return this.checkAuthenticate(url)
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state)
    }

    canLoad(route: Route): boolean {
        const url = `/${route.path}`
        window.console.info(`AuthenticationGuard.canLoad, url: ${url}`)

        return this.checkAuthenticate(url)
    }

    checkAuthenticate(url: string): boolean {
        if (this.authService.inLoginForm) {
            window.console.info('auth-service in login form')
            return url == '/login';
        }

        if (this.authService.isAuthorized) {
            window.console.info('auth-service authorized; guard returns true')
            return true
        } else {
            window.console.info('auth-service not authorized; guard returns false')

            // Set our navigation extras object
            // that contains our global query params and fragment
            /*
            const navigationExtras: NavigationExtras = {
              queryParams: { session_id: sessionId },
              fragment: 'anchor'
            };
      
            // Navigate to the login page with extras
            // this.router.navigate(['/login'], navigationExtras);
            */
            return false
        }
    }
}
