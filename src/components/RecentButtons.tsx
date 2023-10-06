import React from 'react';

const RecentButtons = () => {
  // For now, we'll just hardcode the buttons
  // Later, we'll use a database to store the buttons
  const recentButtons = [
    {
      id: 1,
      name: 'London',
    },
    {
      id: 2,
      name: 'Paris',
    },
    {
      id: 3,
      name: 'New York',
    },
    {
      id: 4,
      name: 'Tokyo',
    },
    {
      id: 5,
      name: 'Sydney',
    },
  ];
  return (
    <div className='flex items-center justify-center flex-wrap gap-2'>
      {recentButtons.map((button) => (
        <button
          key={button.id}
          className=' 
            bg-gradient-to-br from-cyan-700 to-blue-800
            text-white font-medium py-2 px-4 rounded-xl shadow-md
            hover:from-cyan-700 hover:to-blue-300 hover:shadow-xl
            focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50

            '
        >
          {button.name}
        </button>
      ))}
    </div>
  );
};

export default RecentButtons;
