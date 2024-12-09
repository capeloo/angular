import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FrogsService } from '../frogs.service';
import { Frogs } from '../frogs.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-details',
  imports: [RouterModule, ReactiveFormsModule],
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
    <main>
      <section>
        <div>
          <h1>
            {{ frog?.name }}
          </h1>
        </div>
        <div class="form">
          <h2>Escreva algo para ele(a)!</h2>
          <form [formGroup]="form" (submit)="submitForm()">
            <textarea name="text" id="text" formControlName="text"></textarea>
            <button type="submit" class="primary">Enviar</button>
          </form>
        </div>
      </section>  
      <img
        class="listing-photo"
        [src]="frog?.photo" 
        crossorigin
      />
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
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  frogsService: FrogsService = inject(FrogsService);
  frog: Frogs | undefined;
  form = new FormGroup ({
      text: new FormControl(''),
  });

  constructor (){
    const cardId = parseInt(this.route.snapshot.params['id']);
    
    this.frogsService.getFrogById(cardId).then((frog) => {this.frog = frog;});
  }

  submitForm(){
    this.frogsService.submitForm(
      this.form.value.text ?? '',
    );
  }
}
