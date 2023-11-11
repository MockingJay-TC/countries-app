export interface Country {
  name: CountryName;
  flags: Flag;
  population: number;
  capital: string;
  region: string;
}

export interface Flag {
  png: string;
  svg: string;
  alt: string;
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
}

export interface CountryDetail extends Country {
  subregion: string;
  topLevelDomain: string[];
  currencies: string[];
  languages: string[];
}
