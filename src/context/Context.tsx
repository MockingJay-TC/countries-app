import { createContext, Dispatch, SetStateAction } from "react";

const themeState: {
  theme: boolean;
  setTheme: null | Dispatch<SetStateAction<boolean>>;
} = {
  theme: false,
  setTheme: null,
};

const regionalState: {
  regionFilter: string;
  setFilter: null | Dispatch<SetStateAction<string>>;
} = {
  regionFilter: "",
  setFilter: null,
};

const countryState: {
  countrySearch: string;
  setCountrySearch: null | Dispatch<SetStateAction<string>>;
} = {
  countrySearch: "",
  setCountrySearch: null,
};

export const ThemeContext = createContext(themeState);
export const CountryContext = createContext(countryState);
export const RegionContext = createContext(regionalState);
