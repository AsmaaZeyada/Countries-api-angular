import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryDetailsPageRoutingModule } from './country-details-page-routing.module';
import { CountryDetailsPageComponent } from './country-details-page.component';


@NgModule({
  declarations: [
    CountryDetailsPageComponent
  ],
  imports: [
    CommonModule,
    CountryDetailsPageRoutingModule
  ]
})
export class CountryDetailsPageModule { }
