import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Frogs } from "./frogs.model";

@Injectable({
    providedIn: 'root',
})

export class FrogsService {
    private apiUrl = 'http://localhost:8080/api/';

    constructor(private http: HttpClient){}

    async getFrogs(): Promise<Frogs[]> {
        const data = await fetch(`${this.apiUrl}/frogs`);
        return(await data.json()) ?? [];
    }

    async getFrogById(id: number): Promise<Frogs | undefined> {
        const data = await fetch(`${this.apiUrl}/details?id=${id}`);
        return(await data.json()) ?? {};
    }

    submitForm(text: string){
        console.log(text);
    }
}