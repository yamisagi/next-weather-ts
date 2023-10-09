import React, { useEffect, useRef } from 'react';
import HourlyForeCastItem from './HourlyForeCastItem';
import DailyForeCastItem from './DailyForeCastItem';
import { motion } from 'framer-motion';
import { fadeIn } from '@/constants/variants';

const ForeCast = ({
  title,
  dailyData,
  hourlyData,
  weatherData: { date, timezone },
}: {
  title: string;
  dailyData?: Daily[];
  hourlyData?: Hourly[];
  weatherData: WeatherDataParams;
}) => {
  return (
    <motion.div
      variants={fadeIn('up', 0.4)}
      initial='hidden'
      animate='show'
      exit='hidden'
    >
      <div className='flex flex-col justify-center items-center text-white font-light py-2 mt-5'>
        <p
          className={`text-3xl text-center font-semibold text-white/50 bg-clip-text border-b-2 border-white/50 pb-2`}
        >
          {title}
        </p>
      </div>
      <div
        className={`flex flex-row flex-wrap justify-center align-center text-white font-light md:gap-5 sm:gap-1 mt-5`}
      >
        {title === 'Hourly Forecast' &&
          hourlyData?.map((hourly, index) => (
            <HourlyForeCastItem key={index} weatherData={hourly} />
          ))}
        {title === 'Daily Forecast' &&
          dailyData?.map((daily, index) => (
            <DailyForeCastItem key={index} weatherData={daily} />
          ))}
      </div>
    </motion.div>
  );
};

export default ForeCast;
