import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../redux';
import * as S from './styles';
import { SectionList, Modal } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { CalendarDate, SectionData, WeatherCard } from '../../types/types';
import { getCalendarDate } from '../../utils/date';

const DEFAULT_WEATHER_CARD = {
  dt: 0,
  average: 0,
};

const WeatherScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedDay, setSelectedDay] =
    useState<WeatherCard>(DEFAULT_WEATHER_CARD);
  const { weather } = useSelector((state: ApplicationState) => state.weather);

  const DATA: Array<SectionData> = [
    {
      title: 'First Week',
      data: weather.list.slice(0, 6),
    },
    {
      title: 'Second Week',
      data: weather.list.slice(6, 12) || [],
    },
  ];

  const date: CalendarDate = {
    minDate: getCalendarDate(weather.list[0].dt),
    maxDate: getCalendarDate(weather.list[weather.list.length - 1].dt),
  };

  const renderWeatherCard = (data: WeatherCard) => (
    <S.WeatherCard>
      <S.WeatherCardDt>
        {new Date(data.dt * 1000).toLocaleDateString().split('/').join('.')}
      </S.WeatherCardDt>
      <S.WeatherCardTemp>
        {Math.round(data.average - 273.15)} °C
      </S.WeatherCardTemp>
    </S.WeatherCard>
  );

  const renderSelectedWeatherModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <S.SelectedWeatherModal onPress={() => setModalVisible(false)}>
        {renderWeatherCard({
          dt: selectedDay.dt,
          average: selectedDay.average,
        })}
      </S.SelectedWeatherModal>
    </Modal>
  );

  return (
    <S.Container>
      <S.Content showsVerticalScrollIndicator={false}>
        <SectionList
          sections={DATA}
          renderItem={({
            item: {
              dt,
              temp: { average },
            },
          }) => renderWeatherCard({ dt, average })}
          renderSectionHeader={({ section }) => (
            <S.Title>{section.title}</S.Title>
          )}
          keyExtractor={() => Math.random()}
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
        />
        <Calendar
          minDate={date.minDate}
          maxDate={date.maxDate}
          style={{ marginVertical: 50 }}
          onDayPress={(day) => {
            const {
              dt,
              temp: { average },
            } = weather.list.find(
              (x) => getCalendarDate(x.dt) === day.dateString,
            );
            setSelectedDay({ dt, average });
            setModalVisible(true);
          }}
        />
        {renderSelectedWeatherModal()}
      </S.Content>
    </S.Container>
  );
};

export default WeatherScreen;
