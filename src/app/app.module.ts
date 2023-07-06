import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { InputFormatDirective } from './components/input-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    DirectivesComponent,
    InputFormatDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
