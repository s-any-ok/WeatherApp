import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['weather'],
};

import weather from './weather';

const rootReducer = combineReducers({
  weather,
});

export default persistReducer(persistConfig, rootReducer);
