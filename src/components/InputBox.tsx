import React, { useState } from 'react';
import { FaSearchLocation } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';

const InputBox = ({
  setSearchQuery,
  setUnit,
  units,
}: {
  setSearchQuery: React.Dispatch<React.SetStateAction<SearchQueries>>;
  setUnit: React.Dispatch<React.SetStateAction<string>>;
  units: string;
}) => {
  const [input, setInput] = useState('');
  const handleSearch = () => {
    if (!input) return;
    setSearchQuery({ q: input });
    setInput('');
  };

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setSearchQuery({ lat: latitude.toString(), lon: longitude.toString() });
    });
  };

  const handleUnit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnit(selectedUnit);
  };

  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row justify-center items-center bg-white rounded-xl shadow-xl w-96'>
        <input
          className='w-full h-12 text-gray-700 rounded-xl text-md p-2 focus:outline-none capitalize'
          type='text'
          placeholder='Search for any location'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <div
          className='flex flex-row justify-center items-center w-12 h-12 cursor-pointer transition duration-200 ease-in-out hover:scale-110'
          onClick={handleLocation}
        >
          <ImLocation className='text-2xl text-blue-700' />
        </div>
        <div
          className='flex flex-row justify-center items-center w-12 h-12 cursor-pointer 
       transition duration-200 ease-in-out hover:scale-110'
          onClick={handleSearch}
        >
          <FaSearchLocation className='text-2xl text-blue-700' />
        </div>
      </div>
      <div
        className='
        flex flex-row justify-center items-center text-white ml-4 gap-2 font-light
       '
      >
        <button
          className='hover:scale-110  transition duration-200 ease-in-out'
          name='metric'
          onClick={handleUnit}
        >
          °C
        </button>
        <p className='text-xl'>|</p>
        <button
          className='hover:scale-110  transition duration-200 ease-in-out'
          name='imperial'
          onClick={handleUnit}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default InputBox;
