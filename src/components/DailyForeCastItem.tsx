import React from 'react';
import Image from 'next/image';
import { getWeatherIcon } from '@/services/api';
import { motion } from 'framer-motion';
import { fadeIn } from '@/constants/variants';

const DailyForeCastItem = ({ weatherData }: { weatherData: Daily }) => {
  return (
    <motion.div
      variants={fadeIn('left', 0.5)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='flex flex-col flex-wrap justify-center 
    min-w-[120px] max-w-[120px] h-[fit-content]
    items-center text-white font-light m-1 mt-2 
    border-2 border-white/50 p-2 border-opacity-50 rounded-lg'
    >
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
    </motion.div>
  );
};

export default DailyForeCastItem;
