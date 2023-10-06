import React from 'react';
import { FaSearchLocation } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';

const InputBox = () => {
  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row justify-center items-center bg-white rounded-xl shadow-xl w-96'>
        <input
          className='w-full h-12 text-gray-700 rounded-xl text-md p-2 focus:outline-none'
          type='text'
          placeholder='Search for any location'
        />
        <div className='flex flex-row justify-center items-center w-12 h-12'>
          <ImLocation className='text-2xl text-blue-700' />
        </div>
        <div className='flex flex-row justify-center items-center w-12 h-12'>
          <FaSearchLocation className='text-2xl text-blue-700' />
        </div>
      </div>
    </div>
  );
};

export default InputBox;
