import { Component, Input, OnInit } from '@angular/core';
import { CountryListItem } from 'src/app/countries/country-list-item';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent {
  @Input() country: CountryListItem;

  getCountryFlag() {
    return this.country.flag;
  }
}
