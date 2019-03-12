import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
  	provide: LOCALE_ID, useValue: 'pl-PL'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
