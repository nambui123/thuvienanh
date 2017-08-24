import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpApi } from './http_service';

@Injectable()
export class HttpServiceGenerator {
    constructor(

        private http: Http
    ) {
    }

    private get host() {
        return "http://localhost:8080";
    }

    make<T>(uri = '') {
        if (!uri.startsWith("/")) {
            uri = "/" + uri;
        }
        return new HttpApi<T>(`${this.host}${uri}`, this.http);
    }
}