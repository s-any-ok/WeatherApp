export enum WeatherTypes {
  LOAD_REQUEST = '@weather/LOAD_REQUEST',
  LOAD_SUCCESS = '@weather/LOAD_SUCCESS',
  LOAD_FAILURE = '@weather/LOAD_FAILURE',
}

export interface Temp {
  average: number;
  average_max: number;
  average_min: number;
  record_max: number;
  record_min: number;
}

export interface WeatherOnDay {
  dt: number;
  humidity: number;
  pressure: number;
  temp: Temp;
  wind_speed: number;
}

export interface Weather {
  cod: string;
  city: Object;
  message: number;
  list: Array<WeatherOnDay>;
}

export interface WeatherState {
  readonly weather: Weather;
  readonly loading: boolean;
  readonly error: boolean;
}
