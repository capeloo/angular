import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class FrogsService {
    private apiUrl = 'http://localhost:8080/api/frogs';

    constructor(private http: HttpClient){}

    getFrogs(): Observable<string[]> {
        return this.http.get<string[]>(this.apiUrl);
    }
}