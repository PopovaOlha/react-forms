import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { countries } from '../constants/constants';

interface CountryState {
  countries: string[];
  selectCountry: string;
}

const initialState: CountryState = {
  countries: countries,
  selectCountry: '',
};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<string[]>) => {
      state.countries = action.payload;
    },
    selectCountry: (state, action: PayloadAction<string>) => {
      state.selectCountry = action.payload;
    },
  },
});

export const { setCountries, selectCountry } = countrySlice.actions;
export default countrySlice.reducer;
