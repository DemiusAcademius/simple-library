import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { later } from '@app/core/utils/later';

// see: https://www.positronx.io/angular-form-validation-with-template-driven-using-bootstrap/
// see: https://www.tektutorialshub.com/angular/template-driven-form-validation-in-angular/

export type LoginProcess =
    { status: 'show-form' } |
    { status: 'process' } |
    { status: 'error', message: string }

@Component({
    selector: 'app-login',
    templateUrl: './template.html',
    styleUrls: [
        './style.css'
    ]
})
export class LoginComponent {
    @ViewChild('loginForm', { static: true })
    public loginForm?: NgForm

    // enable or disable login form based of login-process state
    loginProcess: LoginProcess = { status: 'show-form' }
    passwordVisible = false;

    loginModel = {
        username: '',
        password: ''
    }

    constructor(private authenticationService: AuthenticationService) { }

    formInvalid() {
        return !this.loginForm?.valid ?? false
    }

    onSubmit() {
        // stop here if form is invalid
        if (this.formInvalid()) {
            return
        }

        this.loginProcess = { status: 'process' }

        this.authenticationService.login(this.loginModel).subscribe(message => {
            if (message !== null) {
                this.loginProcess = { status: 'error', message }
                later(6000).then(() => {
                    this.loginProcess = { status: 'show-form' }
                })
            }
        })
    }
}
