import { call, put, takeLatest } from 'redux-saga/effects';
import { CountriesQuery } from '../../interfaces/interfaces';
import { getCountries } from '../../network/endpoints';
import { fetchCountries, fetchCountriesSuccess, fetchCountriesFailure } from './countriesSlice';

export function* watchCountriesSaga () {
    yield takeLatest(fetchCountries, fetchCountriesInit);
}

export function* fetchCountriesInit({ payload: any }: ReturnType<any>) {
    try {
      const result: CountriesQuery = yield call(getCountries);
      yield put(fetchCountriesSuccess({...result.data[0], items: result.data[1] }));
   } catch (error) {
      console.log(error)
      yield put(fetchCountriesFailure(error));
   }
}