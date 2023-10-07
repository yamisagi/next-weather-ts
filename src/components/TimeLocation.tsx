import React from 'react';
import { BiTimeFive } from 'react-icons/bi';

const TimeLocation = () => {
  return (
    <div>
      <div className='flex items-center justify-center my-8'>
        <div className='text-white text-xl font-light '>
          <p>Saturday, 07 Oct 2023</p>
          <div className='flex items-center justify-center text-white font-light gap-2 mt-2'>
            <BiTimeFive className='inline-block text-2xl' />
            <p className='text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
              12:00 PM
            </p>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center my-5'>
        <div className='text-white text-xl font-semibold '>
          <p>New York, USA</p>
        </div>
      </div>
    </div>
  );
};

export default TimeLocation;
