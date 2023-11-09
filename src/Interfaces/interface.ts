export interface Country {
  name: CountryName;
  flag: string;
}

export interface CountryName {
  common: string;
}

export interface CountryState {
  loading: boolean;
  countries: CountryDetail[];
  error: string | undefined;
}

export interface CountryDetail extends Country {}
