import { all, takeLatest } from 'redux-saga/effects';
import { WeatherTypes } from './weather/types';
import { load } from './weather/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(WeatherTypes.LOAD_REQUEST, load)]);
}
