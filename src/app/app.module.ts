import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, components } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CurrentWeatherModule } from './modules/current-weather/current-weather.module';

@NgModule({
  declarations: [
    AppComponent,
    components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CurrentWeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
