import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Destroyable } from '@app/core/base-components/destroyable';
import { AuthenticationService } from '@app/core/services/authentication.service';

@Component({
    selector: 'app-main-home',
    templateUrl: './template.html',
    styleUrls: ['./style.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainHomeComponent extends Destroyable {
    constructor(
        private cdr: ChangeDetectorRef,
        private authenticationService: AuthenticationService) {
        super()
    }

    isAuthorized = false
    userIsLibrarian = false
    userIsAdministrator = false

    public ngOnInit(): void {
        this.authenticationService.authentication$
            .pipe(this.takeUntilDestroyed())
            .subscribe(it => {
                this.isAuthorized = this.authenticationService.isAuthorized
                if (this.isAuthorized) {
                    this.userIsAdministrator = this.authenticationService.isUserInRole('Administrator')
                    this.userIsLibrarian = this.authenticationService.isUserInRole('Librarian')
                }
                this.cdr.detectChanges()
            })
    }
}
