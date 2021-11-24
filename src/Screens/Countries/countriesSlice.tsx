import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountriesState, CountriesQuery } from '../../interfaces/interfaces';

const initialState: CountriesState  = {
    loading: true,
    error: null,
    result: []
  }
  
  export const counterSlice = createSlice({
    name: 'countries',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      fetchCountries: (state: any, action: PayloadAction<any>) => {
        return {
          ...state,
          error: null,
          loading: true
        };
      },
      fetchCountriesSuccess: (state: any, action: PayloadAction<CountriesQuery>) => {
        return {
            ...state,
            loading: false,
            result: {...action.payload}
        };
      },
      fetchCountriesFailure: (state: any, action: PayloadAction<any>) => {
        return {
            ...state,
            loading: false,
            error: action.payload
        };
      },
      filterCountries: (state: any, action: PayloadAction<string>) => {
        return {
          ...state,
          error: null,
          loading: true
        };
      },
      filterCountriesSuccess: (state: any, action: PayloadAction<CountriesQuery[]>) => {
        return {
          ...state,
          loading: false,
          result: [...action.payload]
        };
      },
      filterCountriesFailiure: (state: any, action: PayloadAction<any>) => {
        return {
          ...state,
          error: action.payload,
          loading: false
        };
      },
    },
  });

export const { 
  fetchCountries, 
  fetchCountriesSuccess,
  fetchCountriesFailure,
  filterCountries,
  filterCountriesSuccess,
  filterCountriesFailiure
 } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCountries = (state: any) => state.countries.result;

export const countriesReducer = counterSlice.reducer;