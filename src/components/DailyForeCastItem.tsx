import React from 'react';
import Image from 'next/image';
import { getWeatherIcon } from '@/utils/api';

const DailyForeCastItem = ({ weatherData }: { weatherData: Daily }) => {
  return (
    <div className='flex flex-col flex-wrap justify-center items-center text-white font-light gap-y-1 mt-5 border-2 border-cyan-400 p-3 border-opacity-50 rounded-lg'>
      <p>
        <span className='font-extralight'>{weatherData.title}</span>
      </p>
      <Image
        src={getWeatherIcon(weatherData.icon ?? '')}
        width={30}
        height={30}
        alt={'Weather icon'}
      />
      <p>
        <span className='font-light'>{weatherData.temp?.day?.toFixed(0)}°</span>
      </p>
    </div>
  );
};

export default DailyForeCastItem;