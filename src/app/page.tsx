'use client';
import ForeCast from '@/components/ForeCast';
import InputBox from '@/components/InputBox';
import RecentButtons from '@/components/RecentButtons';
import TempDetails from '@/components/TempDetails';
import TimeLocation from '@/components/TimeLocation';
import React, { useState, useEffect, useRef } from 'react';
import { getFormattedData, formatHour } from '@/utils/api';
import ClipLoader from 'react-spinners/ClipLoader';
import { ToastContainer, toast } from 'react-toastify';
import { saveToLocal } from '@/utils/saveRecentData';

const Home = () => {
  let searchHistory = [];
  if (typeof window !== 'undefined') {
    searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
  }
  const [weatherData, setWeatherData] = useState<WeatherDataParams>();
  const [units, setUnit] = useState('metric');
  const [searchQuery, setSearchQuery] = useState<SearchQueries>({
    q: searchHistory[0] ?? 'Istanbul',
  });
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    saveToLocal(searchQuery);
    const fetchWeatherData = async () => {
      setNotFound(false);
      const data = await getFormattedData({ ...searchQuery, units });
      setWeatherData(data!);
    };
    fetchWeatherData();
    console.log('Weather Data', weatherData);
    const timer = setTimeout(() => {
      if (!weatherData) {
        setNotFound(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, units]);

  const changeBackground = (hour: string) => {
    if (!weatherData) return 'from-blue-500 to-purple-500';
    const { sunrise, sunset } = weatherData;
    const sunriseHour = formatHour(sunrise!, weatherData.timezone!);
    const sunsetHour = formatHour(sunset!, weatherData.timezone!);
    if (hour >= sunriseHour && hour <= '11:59') {
      return 'from-blue-500 to-cyan-500';
    } else if (hour > '21:00' && hour <= '23:59') {
      return 'from-blue-600 to-gray-700';
    } else if (hour >= '00:00' && hour < '03:00') {
      return 'from-blue-800 to-gray-900';
    } else if (hour >= '03:01' && hour < '06:00') {
      return 'from-gray-600 to-blue-600';
    } else if (hour >= '06:01' && hour < '09:00') {
      return 'from-yellow-700 to-green-700';
    } else if (hour >= '12:00' && hour < '15:00') {
      return 'from-blue-500 to-cyan-600';
    } else if (hour >= '15:00' && sunsetHour) {
      return 'from-blue-600 to-gray-700';
    }
    return 'from-purple-700 to-blue-700';
  };

  return (
    <div
      className={`mx-auto max-w-screen-lg mt-4 py-5 px-16 bg-gradient-to-bl ${changeBackground(
        formatHour(weatherData?.date!, weatherData?.timezone!)
      )} h-fit shadow-xl rounded-lg shadow-gray-500`}
    >
      <RecentButtons setSearchQuery={setSearchQuery} />
      <InputBox
        setSearchQuery={setSearchQuery}
        setUnit={setUnit}
        units={units}
      />

      {weatherData && (
        <>
          <TimeLocation {...weatherData} />
          <TempDetails {...weatherData} />
          <ForeCast
            title={'Hourly Forecast'}
            weatherData={weatherData}
            hourlyData={weatherData.hourly}
          />
          <ForeCast
            title={'Daily Forecast'}
            weatherData={weatherData}
            dailyData={weatherData.daily}
          />
        </>
      )}
      {notFound && (
        <div className='flex justify-center text-center items-center text-white font-light py-2 mt-5'>
          {searchQuery.q === '' ? (
            <p className='text-2xl font-semibold'>Please enter a location</p>
          ) : (
            <p className='text-3xl font-semibold'>
              Sorry, we couldn&apos;t find any results for{' '}
              <span className='text-3xl font-semibold bg-gradient-to-b from-blue-200 to-purple-300 bg-clip-text text-transparent'>
                {searchQuery.q
                  ?.split(' ')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')}
              </span>
            </p>
          )}
        </div>
      )}
      {!weatherData && !notFound && (
        <div className='flex justify-center items-center text-white font-light py-2 mt-5'>
          <ClipLoader color={'#ffffff'} loading={true} size={150} />
        </div>
      )}
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
      />
    </div>
  );
};

export default Home;
