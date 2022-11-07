export interface CountryDetail {
  borders: string[];
  capital: string;
  currencies: Currency[];
  flag: string;
  languages: Language[];
  name: string;
  nativeName: string;
  population: number;
  region: string;
  regionalBlocs: RegionalBloc[];
  subregion: string;
  topLevelDomain: string;
  translations: Translations;
}



export interface Currency {
  code: string;
  name: string;
  symbol: string
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface RegionalBloc {
  acronym: string;
  name: string;
  otherAcronyms: string[];
  otherNames: string[];
}

export interface Translations {
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  br: string;
  pt: string;
}





