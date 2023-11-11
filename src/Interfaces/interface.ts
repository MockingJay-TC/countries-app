export interface Country {
  name: string;
  flags: Flag;
  population: number;
  capital: string;
  region: string;
  nativeName: string;
  borders: string[];
}

export interface Flag {
  png: string;
  svg: string;
}

export interface CountryName {
  common: string;
  nativeName: never;
}

export interface CountryState {
  loading: boolean;
  countries: Country[];
  error: string | undefined;
  selectedCountry: CountryDetail;
  borders: string[];
}

export interface CountryDetail extends Country {
  subregion: string;
  topLevelDomain: string[];
  currencies: [{ name: string }];
  languages: [{ name: string }];
}
