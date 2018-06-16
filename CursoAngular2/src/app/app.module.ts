import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//importa a classe MeuPrimeiroComponente
import { MeuPrimeiroComponent } from './myComponents/meu-primeiro.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
