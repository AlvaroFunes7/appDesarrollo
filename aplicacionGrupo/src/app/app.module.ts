import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VistaComponent } from './vista/vista.component';
import { FootterComponent } from './footter/footter.component';
import { FormPersonComponent } from './form-person/form-person.component';
import { CardPersonComponent } from './card-person/card-person.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VistaComponent,
    FootterComponent,
    FormPersonComponent,
    CardPersonComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
