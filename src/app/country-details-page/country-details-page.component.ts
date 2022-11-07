import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, Observable, of, tap } from 'rxjs';
import { CountriesService } from '../countries/countries.service';
import { CountryDetail, Currency, Language } from '../countries/country-detail';

@Component({
  selector: 'app-country-details-page',
  templateUrl: './country-details-page.component.html',
  styleUrls: ['./country-details-page.component.scss'],
})
export class CountryDetailsPageComponent implements OnInit {
  // countryName: string;
  country$: Observable<CountryDetail>;
  borderCountries$: Observable<CountryDetail[]>;

  constructor(
    private countriesSvc: CountriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.country$ = this.countriesSvc.getCountryDetail(params['name']).pipe(
        tap((res) => console.log(res)),
        mergeMap((res) => { res.borders ?
          this.borderCountries$ = this.countriesSvc.getCountriesByCodes(
            res.borders
          ) : [];

          console.log(res)

          return of(res);
        })
      );
    });
  }

  getCurrencies(currencies: Currency[]) {
    return currencies.map((currency)=> currency.name).join(', ')
  }
  getLanguages(languages: Language[]) {
    return languages.map((language)=> language.name).join(', ')
  }
}
