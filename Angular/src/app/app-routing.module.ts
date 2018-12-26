import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CountryComponent } from './country/country.component';
import { StatesComponent } from './states/states.component'
import { ErrorComponent } from './error/error.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {path:'',redirectTo:'/country',pathMatch:'full'},
  {path:'country',component:CountryComponent},
  {path:'states/:city',component:StatesComponent},
  {path:'city/:location',component:LocationComponent},
  {path:'**',component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
