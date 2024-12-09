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
        <input type="text" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">search</button>
      </form>
    </header>
    <main >
      <h1>
        Sapos do momento
      </h1>
      <section class="results">
        <app-cards 
          *ngFor="let frog of filteredFrogs" 
          [frog]="frog"
        ></app-cards>
      </section>      
    </main>
    <footer>
      <section class="info">
        <div>
          <h2>Frogs</h2>
          <p>O site do momento para os entusiastas de sapos.</p>
        </div>
        <div>
          <h2>Frogs</h2>
          <p>Sobre nós</p>
          <p>Blog</p>
          <p>Sapos</p>
          <p>Publique aqui</p>
        </div>
        <div>
          <h2>Suporte</h2>
          <p>Reporte um problema</p>
        </div>
        <div>
          <h2>Nossa comunidade</h2>
          <p>Frogs Lovers</p>
          <p>Frog u too</p>
          <p>Toad Chat</p>
        </div>
        <div>
          <h2>Contribuidores</h2>
          <p>Caio Capêlo</p>
          <p>Bruno Nóbrega</p>
          <p>Isadora Granato</p>
        </div>
      </section>
    </footer>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  frogs: Frogs[] = [];
  frogsService: FrogsService = inject(FrogsService);
  filteredFrogs: Frogs[] = [];

  constructor(){
    this.frogsService.getFrogs().then((frogs: Frogs[]) => {
      this.frogs = frogs;
      this.filteredFrogs = frogs;
    });
  }

  filterResults(text: string) {
    if(!text) {
      this.filteredFrogs = this.frogs;
      return;
    }

    this.filteredFrogs = this.frogs.filter((frogs) => 
      frogs.name.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
