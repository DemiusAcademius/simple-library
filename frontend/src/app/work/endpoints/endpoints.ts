import { HttpClientProvider } from "@app/core/services/http-client.provider"
import { environment } from "@env/environment"
import { Author, Book, BookInfo, Publisher } from "./domain"

export const loadAllPublishers = () =>
    HttpClientProvider.http.get<Publisher[]>(
        `${environment.api}/library/publishers`
    )

export const loadAllAuthors = () =>
    HttpClientProvider.http.get<Author[]>(
        `${environment.api}/library/authors`
    )

export const loadAllBooks = () =>
    HttpClientProvider.http.get<BookInfo[]>(
        `${environment.api}/library/books`
    )

export const addBook = (book: Book) =>
    HttpClientProvider.http.post(
        `${environment.api}/library/books`, book
    )

export const updateBook = (book: Book) =>
    HttpClientProvider.http.put(
        `${environment.api}/library/books/${book.isbn}`, book
    )

export const deleteBook = (isbn: string) =>
    HttpClientProvider.http.delete(
        `${environment.api}/library/books/${isbn}`
    )

export const borrowBook = (isbn: string, clientId: number) =>
    HttpClientProvider.http.post(
        `${environment.api}/library/clients/${clientId}/borrow/${isbn}`, {}
    )

export const returnBook = (isbn: string, clientId: number) =>
    HttpClientProvider.http.post(
        `${environment.api}/library/clients/${clientId}/return/${isbn}`, {}
    )