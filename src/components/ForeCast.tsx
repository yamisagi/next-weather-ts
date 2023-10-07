import React from 'react';
import ForeCastItem from './ForeCastItem';

const ForeCast = ({ title }: { title: string }) => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center text-white font-light py-2'>
        <p
          className='text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent border-b-2 border-cyan-400 pb-2
        '
        >
          {title}
        </p>
      </div>
      <div
        className={`grid grid-cols-6 ${
          title === 'Hourly Forecast' ? 'grid-rows-2' : 'grid-rows-1'
        } place-items-start md:place-items-center text-white font-light gap-2 mt-5`}
      >
        <ForeCastItem />
      </div>
    </div>
  );
};

export default ForeCast;
