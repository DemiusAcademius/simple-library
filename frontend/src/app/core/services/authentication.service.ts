import { Inject, Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { BehaviorSubject, EMPTY, Observable, throwError } from 'rxjs'

import { later } from '@app/core/utils/later'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

export type LoginRequest = {
    username: string
    password: string
}

type AuthenticationInfo = {
    id: number, username: string, token: string, roles: string[]
}

type UserInfo = {
    id: number, username: string, roles: string[]
}

export type AuthenticationStatusAuthorized = { status: 'authorized', info: AuthenticationInfo }
export type AuthenticationStatus = { status: 'unauthorized' } | { status: 'login' } | AuthenticationStatusAuthorized

const SESSION_STORAGE = 'authentication-info'
// TODO: token lifetime !!!

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private authentication = new BehaviorSubject<AuthenticationStatus>({ status: 'unauthorized' });
    readonly authentication$ = this.authentication.asObservable();

    constructor(
        private http: HttpClient,
        private router: Router) {
    }

    public get username(): string | null {
        const auth = this.authentication.value
        return auth.status === 'authorized' ? auth.info.username : null
    }

    public get inLoginForm() {
        const auth = this.authentication.value
        return auth.status === 'login'
    }

    public get isAuthorized() {
        const auth = this.authentication.value
        return auth.status === 'authorized'
    }

    public get accessToken(): string | null {
        const auth = this.authentication.value
        return auth.status === 'authorized' ? auth.info.token : null
    }

    public isUserInRole(role: string): boolean {
        const auth = this.authentication.value
        return auth.status === 'authorized' ? auth.info.roles.includes(role) : false
    }

    startup() {
        const storageItem = sessionStorage.getItem(SESSION_STORAGE)
        if (storageItem) {
            // TODO: analize last authorized
            const token = JSON.parse(storageItem)
            const options = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            this.http.get<UserInfo>(`/api/auth/userinfo`, options)
                .subscribe(userInfo => this.switchToAuthorized({ ...userInfo, token }))
        } else {
            this.switchToLogin()
        }
    }

    login(body: LoginRequest): Observable<string | null> {
        return this.http.post<AuthenticationInfo>(`/api/auth/login`, body)
            .pipe(
                map(response => {
                    sessionStorage.setItem(SESSION_STORAGE, JSON.stringify(response.token))
                    this.switchToAuthorized(response)
                    return null
                })
            )
    }

    logout() {
        // this.http.post(`${this.config.AUTH_SERVICE_URL}/auth/logout`, {}).subscribe()
        sessionStorage.removeItem(SESSION_STORAGE)
        this.switchToLogin()
    }

    handleError(error: HttpErrorResponse): Observable<never> {
        // handle error call from error.interceptor only if startup-or-login
        if (this.authentication.value.status === 'unauthorized') {
            sessionStorage.removeItem(SESSION_STORAGE)
            this.router.navigate(['home'])
        } else {
            later(5000).then(() => this.logout())
            // TODO: notification
            return throwError(() => new Error('A apărut o eroare de autorizare'))
        }

        return EMPTY
    }

    private switchToAuthorized(info: AuthenticationInfo) {
        this.authentication.next({ status: 'authorized', info })
        this.router.navigate(['home'])
    }

    private switchToLogin() {
        this.authentication.next({ status: 'login' })
        this.router.navigate(['login'])
    }

}
