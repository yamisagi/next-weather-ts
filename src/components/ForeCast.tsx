import React from 'react';
import HourlyForeCastItem from './HourlyForeCastItem';
import DailyForeCastItem from './DailyForeCastItem';
import { changeBackground } from '@/utils/dynamicbg';
import { formatHour } from '@/utils/api';

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
  const { textGradient } = changeBackground(formatHour(date!, timezone!));

  return (
    <div>
      <div className='flex flex-col justify-center items-center text-white font-light py-2 mt-5'>
        <p
          className={`text-3xl font-semibold bg-gradient-to-b ${textGradient} bg-clip-text text-transparent border-b-2 border-white/50 pb-2`}
        >
          {title}
        </p>
      </div>
      <div
        className={`flex flex-row flex-wrap justify-center align-center text-white font-light gap-3 mt-5`}
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
    </div>
  );
};

export default ForeCast;
