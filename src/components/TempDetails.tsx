import React from 'react';
import Image from 'next/image';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';
import { BsWind } from 'react-icons/bs';
import { FiSunrise, FiSunset } from 'react-icons/fi';
import { WiHumidity } from 'react-icons/wi';

const TempDetails = () => {
  return (
    <div>
      <div className='flex items-center justify-center text-xl text-cyan-300'>
        <p>Sunny</p>
      </div>
      <div className='flex flex-col md:flex-row justify-evenly items-center text-white font-light gap-y-2'>
        <Image
          src={'http://openweathermap.org/img/wn/01d@2x.png'}
          width={100}
          height={100}
          alt={'Weather icon'}
        />
        <p className='text-5xl'>25°</p>
        <div className='flex flex-col justify-center items-start mt-2 gap-2 text-white font-light'>
          <div className='flex flex-row justify-center items-center gap-2'>
            <FaTemperatureHigh className='text-sm' />
            Feels like <span className='font-bold'>25°</span>
          </div>
          <div className='flex flex-row justify-center items-center gap-2'>
            <BsWind className='text-sm' />
            Wind Speed <span className='font-bold'>15km/h</span>
          </div>
          <div className='flex flex-row justify-center items-center gap-2'>
            <WiHumidity className='text-sm' />
            Humidity <span className='font-bold'>10%</span>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 grid-rows-2 md:place-items-center text-white font-light gap-3 mt-5 border-t-2  border-b-2 border-cyan-400 py-3  mb-2 border-opacity-50'>
        <div className='flex flex-row justify-center items-center gap-2'>
          <FiSunrise className='text-sm' />
          Sunrise <span className='font-bold'>6:00 AM</span>
        </div>
        <div className='flex flex-row justify-center items-center gap-2'>
          <FiSunset className='text-sm' />
          Sunset <span className='font-bold'>6:00 PM</span>
        </div>
        <div className='flex flex-row justify-center items-center gap-2'>
          <AiOutlineArrowUp className='text-sm' />
          Max <span className='font-bold'>25°</span>
        </div>
        <div className='flex flex-row justify-center items-center gap-2'>
          <AiOutlineArrowDown className='text-sm' />
          Min <span className='font-bold'>15°</span>
        </div>
      </div>
    </div>
  );
};

export default TempDetails;
