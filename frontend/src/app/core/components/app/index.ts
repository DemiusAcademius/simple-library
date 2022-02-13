import { Component } from '@angular/core'

import { AuthenticationService, AuthenticationStatus } from '@app/core/services/authentication.service'
import { NotificationService } from '@app/core/services/notification.service'
import { HttpClientProvider } from '@app/core/services/http-client.provider'
import { Destroyable } from '@app/core/base-components/destroyable'

@Component({
    selector: 'app-root',
    templateUrl: './template.html'
})
export class AppComponent extends Destroyable {
    authentication: AuthenticationStatus = { status: 'unauthorized' }

    constructor(
        httpProvider: HttpClientProvider,
        notificationService: NotificationService,
        private authenticationService: AuthenticationService
    ) {
        super()
        httpProvider.init()
        notificationService.init()
        authenticationService.startup()
    }

    ngOnInit(): void {
        this.authenticationService.authentication$
            .pipe(
                this.takeUntilDestroyed()
            )
            .subscribe(it => this.authentication = it)
    }

    switchToLogin() {
        this.authenticationService.switchToLogin()
    }

}
