import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({ providedIn: 'root' })
export class HttpClientProvider {
    private static HTTP_CLIENT: HttpClient

    static get http() {
        return HttpClientProvider.HTTP_CLIENT
    }

    init(): void {
        HttpClientProvider.HTTP_CLIENT = this.http
    }

    constructor(private http: HttpClient) { }
}
