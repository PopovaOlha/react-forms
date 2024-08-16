import { RootState } from '../store';

export const selectCountries = (state: RootState) => state.country.countries;
export const selectSelectedCountry = (state: RootState) =>
  state.country.selectCountry;
