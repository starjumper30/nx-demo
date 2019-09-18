import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesFeatureHeroSearchModule } from '@starjumper30/heroes/feature-hero-search';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    HeroesFeatureHeroSearchModule,
    RouterModule.forChild(routes)
  ]
})
export class TohFeatureDashboardModule {

  // Routed modules must only be loaded once!!!
  private static loaded = false;

  constructor() {
    if (TohFeatureDashboardModule.loaded) {
      throw new Error('TohFeatureDashboardModule already loaded.');
    }
    TohFeatureDashboardModule.loaded = true;
  }
}
