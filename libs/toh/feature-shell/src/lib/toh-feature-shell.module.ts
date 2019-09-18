import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import {
  AppModule,
  DashboardComponent,
  HeroDetailComponent,
  HeroesComponent
} from '@starjumper30/toh/feature-monolith';
import { MainComponent } from './main.component';

const childRoutes: Routes = [
  // TODO lazy-load all these routes
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

const main: Route = {
  path: '',
  component: MainComponent,
  children: childRoutes
};

@NgModule({
  imports: [
    AppModule,
    CommonModule,
    RouterModule.forChild([main])
  ],
  declarations: [MainComponent]
})
export class TohFeatureShellModule {

  // Routed modules must only be loaded once!!!
  private static loaded = false;

  constructor() {
    if (TohFeatureShellModule.loaded) {
      throw new Error('TohFeatureShellModule already loaded.');
    }
    TohFeatureShellModule.loaded = true;
  }
}
