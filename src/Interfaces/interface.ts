export interface Country {
  name: string;
  flags: Flag;
  population: number;
  capital: string;
  region: string;
  nativeName: string;
  borders: { name: string; code: string }[];
  alpha3Code: string;
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
  borders: { name: string; code: string }[];
}

export interface CountryDetail extends Country {
  subregion: string;
  topLevelDomain: string[];
  currencies: [{ name: string }];
  languages: [{ name: string }];
}
