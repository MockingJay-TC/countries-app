import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CountryDetail, CountryState } from "../../Interfaces/interface";

const initialState: CountryState = {
  loading: false,
  countries: [],
  error: "",
  selectedCountry: {} as CountryDetail,
};

export const fetchCountries = createAsyncThunk(
  "country/fetchCountries",
  async () => {
    const res = await axios.get(
      `${
        import.meta.env.VITE_REST_API
      }/v3.1/all?fields=name,flags,region,capital,population`
    );
    return res.data;
  }
);

export const fetchCountry = createAsyncThunk(
  "country/fetchCountry",
  async (name: string) => {
    const res = await axios.get(
      `${import.meta.env.VITE_REST_API}/v3.1/name/${name}?fullText=true`
    );
    return res.data[0];
  }
);

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.loading = false;
      state.countries = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.loading = false;
      state.countries = [];
      state.error = action.error.message;
    });
    builder.addCase(fetchCountry.fulfilled, (state, action) => {
      state.selectedCountry = action.payload;
    });
  },
});

export default countrySlice.reducer;
