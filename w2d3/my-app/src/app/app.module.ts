import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponent } from './my-component';
import { SpecialComponent } from './special-component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    SpecialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
