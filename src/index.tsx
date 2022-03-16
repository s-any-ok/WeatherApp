import React from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux';

import Routes from './routes/routes';

const MainApp: React.FC = () => (
  <Provider store={store}>
    <PersistGate
      persistor={persistor}
      loading={<ActivityIndicator size="small" color="#FFF" />}>
      <StatusBar translucent backgroundColor="transparent" barStyle="default" />
      <Routes />
    </PersistGate>
  </Provider>
);

export default MainApp;
