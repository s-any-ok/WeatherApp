// @ts-ignore
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const Content = styled.ScrollView`
  width: 80%;
  //align-items: center;
  //justify-content: center;
`;

export const Button = styled.Pressable`
  padding: 15px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: black;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const WeatherCard = styled.View`
  width: 100%;
  min-width: 300px;
  padding: 15px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 12px;
  border-color: gray;
  border-width: 1px;
  margin-bottom: 20px;
  background-color: white;
`;

export const WeatherCardDt = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
`;

export const WeatherCardTemp = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

export const SelectedWeatherModal = styled.Pressable`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  background-color: rgba(255, 255, 255, 0.8);
`;
