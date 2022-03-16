import { Reducer } from 'redux';
import { WeatherTypes, WeatherState } from './types';

const INITIAL_STATE: WeatherState = {
  weather: {
    cod: '200',
    city: {
      id: 5391959,
      name: 'San Francisco',
      coord: {
        lon: -122.4194,
        lat: 37.7749,
      },
      country: 'US',
    },
    message: 0.361696371,
    list: [],
  },
  error: false,
  loading: false,
};

const reducer: Reducer<WeatherState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WeatherTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case WeatherTypes.LOAD_SUCCESS:
      return { ...state, weather: action.payload };
    case WeatherTypes.LOAD_FAILURE:
      return { ...state, error: true };
    default:
      return state;
  }
};

export default reducer;
