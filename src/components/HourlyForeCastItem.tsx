import React from 'react';
import Image from 'next/image';
import { getWeatherIcon } from '@/utils/api';
import { motion } from 'framer-motion';
import { fadeIn } from '@/constants/variants';

const HourlyForeCastItem = ({ weatherData }: { weatherData: Hourly }) => {
  return (
    <motion.div 
    variants={fadeIn('right', 0.5)}
    initial='hidden'
    animate='show'
    exit='hidden'
    className='flex flex-col justify-center items-center min-w-[120px] max-w-[250px] h-[fit-content] text-white font-light gap-y-1 mt-5 border-2 border-white/50 p-5 border-opacity-50 rounded-lg'>
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
        <span className='font-light'>{weatherData.temp.toFixed()}°</span>
      </p>
    </motion.div>
  );
};

export default HourlyForeCastItem;
