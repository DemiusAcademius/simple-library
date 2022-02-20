import { Injectable } from "@angular/core";
import { BookInfo } from "@app/work/endpoints/domain";
import { loadAllBooks } from "@app/work/endpoints/endpoints";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'any'})
export class LibraryService {
    private books = new BehaviorSubject([] as BookInfo[])
    readonly books$ = this.books.asObservable()

    loadAllBooks() {
        loadAllBooks()
            .subscribe(it => this.books.next(it))
    }
}