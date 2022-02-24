import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { LibraryService } from '@app/work/pages/home/services/library.service';

@Component({
    selector: 'app-main-admin',
    templateUrl: './template.html',
    styleUrls: ['./style.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainAdminComponent {
    constructor(
        private cdr: ChangeDetectorRef,
        private libraryService: LibraryService) {
    }

    books$ = this.libraryService.books$

    modalTitle?: string

    showNewBookModal() {
        this.modalTitle = 'ADD NEW BOOK'
        this.cdr.detectChanges()
    }

    showNewUserModal() {
        this.modalTitle = 'ADD NEW USER'
        this.cdr.detectChanges()
    }

    hideModal() {
        this.modalTitle = undefined
        this.cdr.detectChanges()
    }
}
