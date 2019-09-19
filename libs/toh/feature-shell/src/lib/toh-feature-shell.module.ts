import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { SharedUiMessagesModule } from '@starjumper30/shared/ui-messages';
import { MainComponent } from './main.component';

const childRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () => import('@starjumper30/toh/feature-dashboard')
      .then(m => m.TohFeatureDashboardModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('@starjumper30/toh/feature-hero-detail')
      .then(m => m.TohFeatureHeroDetailModule)
  },
  {
    path: 'heroes',
    loadChildren: () => import('@starjumper30/toh/feature-hero-list')
      .then(m => m.TohFeatureHeroListModule)
  }
];

const main: Route = {
  path: '',
  component: MainComponent,
  children: childRoutes
};

@NgModule({
  imports: [
    SharedUiMessagesModule,
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
