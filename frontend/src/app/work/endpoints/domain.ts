export type BookInfo = {
    isbn: string
    name: string
    picture: string
    publisher: string
    publishYear: number
    authors: string[]
}

export type Publisher = {
    id: number,
    name: string
}

export type Author = {
    id: string
    firstName: string
    lastName: string
}

export type Book = {
    isbn: string
    name: string
    picture: string
    publisher: number
    publishYear: number
    authors: number[]
}