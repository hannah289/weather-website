import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [WeatherCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: WeatherCardComponent}])
  ],
  
})
export class CurrentWeatherModule { }
