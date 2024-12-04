import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrogsService } from './frogs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  template: `
    <router-outlet />
    <div *ngFor="let frog of frogs">
      <p>{{ frogs }}</p>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'frogs';

  frogs: string[] = [];

  constructor(private frogsService: FrogsService){}

  ngOnInit(): void {
      this.frogsService.getFrogs().subscribe((data) => {
        this.frogs = data;
      });
  }
}
