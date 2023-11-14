import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CountryState, countryType } from "../../Interfaces/interface";

const initialState: CountryState = {
  loading: false,
  countries: [],
  error: "",
  selectedCountry: {} as countryType,
  borders: [],
};

export const fetchCountries = createAsyncThunk(
  "country/fetchCountries",
  async () => {
    const res = await axios.get(`${import.meta.env.VITE_REST_API}/all`);
    return res.data;
  }
);

export const fetchCountryByCode = createAsyncThunk(
  "country/fetchCountryByCode",
  async (code: string) => {
    const res = await axios.get(
      `${import.meta.env.VITE_REST_API}/alpha/${code}`
    );
    return res.data[0];
  }
);

export const fetchBorderCountries = createAsyncThunk(
  "country/fetchBorderCountries",
  async (borderCountries: string[], { rejectWithValue }) => {
    if (!borderCountries) return [];

    try {
      const objects = await Promise.all(
        borderCountries?.map((border) =>
          axios
            .get(`${import.meta.env.VITE_REST_API}/alpha/${border}`)
            .then((response) => response.data[0])
        )
      );
      return objects;
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
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
    builder.addCase(fetchBorderCountries.fulfilled, (state, action) => {
      state.borders = action.payload;
    });
    builder.addCase(fetchCountryByCode.fulfilled, (state, action) => {
      state.selectedCountry = action.payload;
    });
  },
});

export default countrySlice.reducer;
