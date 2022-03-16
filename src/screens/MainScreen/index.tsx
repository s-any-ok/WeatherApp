import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadRequest } from '../../redux/ducks/weather/actions';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { Route } from '../../constants/routes';

const MainScreen: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const loadWeather = (): void => {
    dispatch(loadRequest(value));
    navigation.navigate(Route.WEATHER);
  };

  return (
    <S.Container>
      <S.Content>
        <S.TextInputWrapper>
          <S.TextInput
            placeholder={'Enter city name'}
            value={value}
            onChangeText={setValue}
          />
        </S.TextInputWrapper>
        <S.Button onPress={loadWeather}>
          <S.Text>Show</S.Text>
        </S.Button>
      </S.Content>
    </S.Container>
  );
};

export default MainScreen;
