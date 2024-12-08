import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-details',
  imports: [RouterModule],
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
        {{ cardId }}
      </h1>
      <section class="results">
        
      </section>    
    </main>
  `,
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  cardId: number = 0;

  constructor (){
    const cardId = parseInt(this.route.snapshot.params['id']);
    this.cardId = cardId;
  }
}
