import React from 'react';

const RecentButtons = ({
  setSearchQuery,
}: {
  setSearchQuery: React.Dispatch<React.SetStateAction<SearchQueries>>;
}) => {
  // For now, we'll just hardcode the buttons
  // Later, we'll use a database to store the buttons
  const searchHistory = JSON.parse(
    localStorage.getItem('searchHistory') || '[]'
  );
  console.log(searchHistory);
  const recentButtons = [
    {
      id: 1,
      name: searchHistory[0] ?? 'London',
    },
    {
      id: 2,
      name: searchHistory[1] ?? 'Paris',
    },
    {
      id: 3,
      name: searchHistory[2] ?? 'New York',
    },
    {
      id: 4,
      name: searchHistory[3] ?? 'Tokyo',
    },
    {
      id: 5,
      name: searchHistory[4] ?? 'Moscow',
    },
  ];

  return (
    <div className='flex items-center justify-center flex-wrap gap-2 '>
      {recentButtons.map((button) => (
        <button
          key={button.id}
          className={`backdrop-filter backdrop-blur-3xl bg-opacity-50
          text-white font-medium py-2 px-4 rounded-xl shadow-xl
          hover:scale-110  hover:shadow-2xl transition-all duration-300 
          capitalize ease-in-out`}
          onClick={() => {
            setSearchQuery({ q: button.name });
          }}
        >
          {button.name}
        </button>
      ))}
    </div>
  );
};

export default RecentButtons;
