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
      fetchCountries: (state: any, action: PayloadAction<null>) => {
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
      filterCountriesSuccess: (state: any, action: PayloadAction<CountriesQuery[]>) => {
        return {
          ...state,
          loading: false,
          result: {...action.payload}
        };
      },
    },
  });

export const { 
  fetchCountries, 
  fetchCountriesSuccess,
  fetchCountriesFailure, 
  filterCountriesSuccess } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCountries = (state: any) => state.countries.result;

export const countriesReducer = counterSlice.reducer;