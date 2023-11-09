import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CountryState } from "../../Interfaces/interface";

const initialState: CountryState = {
  loading: false,
  countries: [],
  error: "",
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
  },
});

export default countrySlice.reducer;
