import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{HttpClientModule} from "@angular/common/http"

import{AirService} from './air.service';
import { CountryComponent } from './country/country.component';
import { StatesComponent } from './states/states.component';
import { ErrorComponent } from './error/error.component';
import { LocationComponent } from './location/location.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    StatesComponent,
    ErrorComponent,
    LocationComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AirService],
  bootstrap: [AppComponent]
})
export class AppModule { }
