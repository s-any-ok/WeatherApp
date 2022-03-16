// @ts-ignore
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const Content = styled.View`
  width: 80%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.Pressable`
  padding: 10px;
  align-items: center;
  justify-content: center;
  background-color: #0098ea;
  width: 50%;
  border-radius: 12px;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const TextInputWrapper = styled.View`
  width: 100%;
  height: 45px;
  margin-bottom: 60px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  padding: 0 15px;
  border-width: 1px;
  border-color: grey;
  border-radius: 12px;
  font-size: 18px;
  color: black;
`;
