import ForeCast from '@/components/ForeCast';
import InputBox from '@/components/InputBox';
import RecentButtons from '@/components/RecentButtons';
import TempDetails from '@/components/TempDetails';
import TimeLocation from '@/components/TimeLocation';
import React from 'react';
import { getFormattedData } from '@/utils/api';

const Home = () => {
  const fetchWeatherData = async () => {
    getFormattedData({ q: 'ankara' });
  };
  // fetchWeatherData();

  return (
    <div
      className='
      mx-auto max-w-screen-lg mt-4 py-5 px-16 bg-gradient-to-bl from-cyan-700 to-blue-700 h-fit shadow-xl rounded-lg shadow-gray-500'
    >
      <RecentButtons />
      <InputBox />
      <TimeLocation />
      <TempDetails />
      <ForeCast title={'Hourly Forecast'} />
      <ForeCast title={'Daily Forecast'} />
    </div>
  );
};

export default Home;
