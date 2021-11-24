import { call, put, takeLatest } from 'redux-saga/effects';
import { CountriesQuery } from '../../interfaces/interfaces';
import { getCountries, getCountryByName } from '../../network/endpoints';
import { 
    fetchCountries,
    fetchCountriesSuccess,
    fetchCountriesFailure,
    filterCountries,
    filterCountriesFailiure,
    filterCountriesSuccess 
} from './countriesSlice';

export function* watchCountriesSaga () {
    yield takeLatest(fetchCountries,
       fetchCountriesInit);
    yield takeLatest(filterCountries, fetchCountryByNameInit);

}

export function* fetchCountriesInit(action: ReturnType<any>) {
    try {
      const { page, itemsPerPage } = action.payload;
      const result: CountriesQuery = yield call(getCountries,  page, itemsPerPage);
      yield put(fetchCountriesSuccess({...result.data[0], items: result.data[1] }));
   } catch (error) {
      console.log(error)
      yield put(fetchCountriesFailure(error));
   }
}

export function* fetchCountryByNameInit(action: ReturnType<any>) {
   try {
      console.log('in saga')
     const name = action.payload;
     const result: CountriesQuery = yield call(getCountryByName,  name);
     yield put(filterCountriesSuccess({...result.data[0], items: result.data[1] }));
  } catch (error) {
     console.log(error)
     yield put(filterCountriesFailiure(error));
  }
}