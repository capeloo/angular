import { Component, inject} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardsComponent } from "../cards/cards.component";
import { CommonModule } from '@angular/common';
import { Frogs } from '../frogs.model';
import { FrogsService } from '../frogs.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule, CardsComponent],
  template: `
    <header>
      <a [routerLink]="['/']">
        <img src="assets/logo.png" alt="logo">
      </a>
      <form>
        <input type="text">
        <button class="primary" type="button">search</button>
      </form>
    </header>
    <main >
      <h1>
        Sapos do momento
      </h1>
      <section class="results">
        <app-cards 
          *ngFor="let frog of frogs" 
          [frog]="frog"
        ></app-cards>
      </section>
      
    </main>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  frogs: Frogs[] = [];
  frogsService: FrogsService = inject(FrogsService);

  constructor(){
    this.frogsService.getFrogs().then((frogs: Frogs[]) => {
      this.frogs = frogs;
    });
  }
}
