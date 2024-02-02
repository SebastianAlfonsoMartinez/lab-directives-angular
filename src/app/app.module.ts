import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResaltarParesDirective } from './resaltar-pares.directive';

@NgModule({
  declarations: [
    AppComponent,
    ResaltarParesDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
