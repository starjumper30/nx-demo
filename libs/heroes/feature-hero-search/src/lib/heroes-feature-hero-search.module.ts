import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroSearchComponent } from './hero-search.component';

@NgModule({
  declarations: [HeroSearchComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeroSearchComponent]
})
export class HeroesFeatureHeroSearchModule {}
