import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { InMemoryDataService } from './in-memory-data.service';

const mainRoute: Route = {
  path: '',
  loadChildren: () => import('@starjumper30/toh/feature-shell')
    .then(m => m.TohFeatureShellModule),

  // You could put authentication guards here to run checks before lazy-loading main
  canLoad: [],
  canActivate: []
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([mainRoute], { initialNavigation: 'enabled' }),


    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
