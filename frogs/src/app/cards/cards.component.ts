import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Frogs } from '../frogs.model';

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="frog.photo" 
        crossorigin
      />
      <h2 class="listing-heading">{{ frog.name }}</h2>
    </section>
  `,
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() frog!: Frogs;
}
