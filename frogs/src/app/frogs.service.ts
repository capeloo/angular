import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Frogs } from "./frogs.model";

@Injectable({
    providedIn: 'root',
})

export class FrogsService {
    private apiUrl = 'http://localhost:8080/api/frogs';

    constructor(private http: HttpClient){}

    async getFrogs(): Promise<Frogs[]> {
        const data = await fetch(this.apiUrl);
        return(await data.json()) ?? [];
    }
}