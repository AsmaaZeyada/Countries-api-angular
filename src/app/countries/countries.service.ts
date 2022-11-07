import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CountryDetail } from './country-detail';
import { CountryListItem } from './country-list-item';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private api =
    'https://restcountries.com/v2/all?fields=name,capital,region,population,flag';

  private detail = 'https://restcountries.com/v2/name/';

  private detailFields =
    '?fields=name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders,topLevelDomain,flag,translations,regionalBlocs';

  private alphaCode = 'https://restcountries.com/v2/alpha?codes=';

  constructor(private http: HttpClient) {}

  public getCountries() {
    return this.http.get<CountryListItem[]>(this.api);
  }

  public getCountryDetail(country: string) {
    return this.http
      .get<CountryDetail[]>(`${this.detail}${country}${this.detailFields}`)
      .pipe(map(([res]) => res));
  }

  public getCountriesByCodes(codes: string[]) {
    return this.http.get<CountryDetail[]>(
      `${this.alphaCode}${codes.join(',')}${this.detailFields}`
    );
  }
}
