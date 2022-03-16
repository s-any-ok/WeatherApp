import { WeatherOnDay } from '../redux/ducks/weather/types';

export interface WeatherCard {
  readonly dt: number;
  readonly average: number;
}

export interface SectionData {
  readonly title: string;
  readonly data: Array<WeatherOnDay>;
}

export interface CalendarDate {
  readonly minDate: string;
  readonly maxDate: string;
}
