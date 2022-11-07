import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CountriesService } from '../countries/countries.service';
import { CountryCardComponent } from '../components/country-card/country-card.component';
import { DropdownFilterComponent } from '../components/dropdown-filter/dropdown-filter.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    CountryCardComponent,
    DropdownFilterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  providers: [CountriesService],
  exports: [HomeComponent]
})
export class HomeModule { }
