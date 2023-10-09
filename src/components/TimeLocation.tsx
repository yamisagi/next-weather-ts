import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { formatTime, formatHour } from '@/utils/api';

const TimeLocation = ({ ...weatherData }: WeatherDataParams) => {
  const { city, country, date, timezone } = weatherData;
  return (
    <div>
      <div className='flex items-center justify-center my-8'>
        <div className='text-white text-xl font-light '>
          <p>{formatTime(date!, timezone!)}</p>
          <div className='flex items-center justify-center text-white font-light gap-2 mt-2'>
            <BiTimeFive className='inline-block text-2xl' />
            <p
              className={`text-3xl font-semibold bg-gradient-to-b from-gray-100 to-white-500 bg-clip-text text-transparent`}
            >
              {formatHour(date!, timezone!)}
            </p>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center my-5'>
        <div className='text-white text-xl font-semibold '>
          <p>
            {city}, {country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimeLocation;
