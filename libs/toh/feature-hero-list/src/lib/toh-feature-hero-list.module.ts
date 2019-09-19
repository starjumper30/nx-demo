import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent
  }
];

@NgModule({
  declarations: [HeroesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [HeroesComponent]
})
export class TohFeatureHeroListModule {

  // Routed modules must only be loaded once!!!
  private static loaded = false;

  constructor() {
    if (TohFeatureHeroListModule.loaded) {
      throw new Error('TohFeatureHeroListModule already loaded.');
    }
    TohFeatureHeroListModule.loaded = true;
  }
}
