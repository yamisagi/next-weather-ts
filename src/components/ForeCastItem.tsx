import React from 'react';
import Image from 'next/image';

const ForeCastItem = () => {
  return (
    <div className='flex flex-col justify-center items-center text-white font-light gap-y-1 mt-5 border-2 border-cyan-400 p-2 border-opacity-50 rounded-lg'>
      <p>
        <span className='font-extralight'>12:00 PM</span>
      </p>
      <Image
        src={'http://openweathermap.org/img/wn/01d.png'}
        width={30}
        height={30}
        alt={'Weather icon'}
      />
      <p>
        <span className='font-light'>25°</span>
      </p>
    </div>
  );
};

export default ForeCastItem;
