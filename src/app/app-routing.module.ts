import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {NameComponent} from './name/name.component';
import {CapitalcityComponent} from './capitalcity/capitalcity.component';
import {CurrencyComponent} from './currency/currency.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'name', component: NameComponent},
  {path: 'capitalcity', component: CapitalcityComponent},
  {path: 'currency', component: CurrencyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
