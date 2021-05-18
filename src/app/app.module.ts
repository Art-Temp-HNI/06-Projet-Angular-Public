import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list'; 
import { MatSortModule } from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { Exo1Component } from './exo1/exo1.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Exo2Component } from './exo2/exo2.component';
import { Exo3Component } from './exo3/exo3.component';


@NgModule({
  declarations: [
    AppComponent,
    Exo1Component,
    Exo2Component,
    Exo3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    NoopAnimationsModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatListModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
