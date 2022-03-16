import { action } from 'typesafe-actions';
import { WeatherTypes } from './types';

export const loadRequest = (city: String) =>
  action(WeatherTypes.LOAD_REQUEST, city);

export const loadSuccess = (weather: any) =>
  action(WeatherTypes.LOAD_SUCCESS, weather);

export const loadFailure = () => action(WeatherTypes.LOAD_FAILURE);
