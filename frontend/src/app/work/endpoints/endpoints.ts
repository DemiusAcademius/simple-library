import { HttpClientProvider } from "@app/core/services/http-client.provider";
import { environment } from "@env/environment";
import { BookInfo } from "./domain";

export const loadAllBooks = () =>
    HttpClientProvider.http.get<BookInfo[]>(
        `${environment.api}/library/books`
    )