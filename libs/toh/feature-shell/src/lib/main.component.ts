import { Component } from '@angular/core';

@Component({
  selector: 'toh-main',
  template: `
      <h1>{{title}}</h1>
      <nav>
          <a routerLink="/dashboard">Dashboard</a>
          <a routerLink="/heroes">Heroes</a>
      </nav>
      <router-outlet></router-outlet>
      <app-messages></app-messages>
  `,
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  title = 'Tour of Heroes';
}
