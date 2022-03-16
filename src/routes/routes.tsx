import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../screens/MainScreen';
import WeatherScreen from '../screens/WeatherScreen';
import { Route } from '../constants/routes';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Route.MAIN} component={MainScreen} />
      <Stack.Screen name={Route.WEATHER} component={WeatherScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
