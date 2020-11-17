import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/current-weather',
  pathMatch: 'full'
},
{
  path: 'current-weather',
  loadChildren: () => import('./modules/current-weather/current-weather.module').then(m => m.CurrentWeatherModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const components: Array<any> = [
  HeaderComponent,
  FooterComponent
]