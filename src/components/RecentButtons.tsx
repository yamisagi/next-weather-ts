import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/constants/variants';
import { getFromLocal } from '@/utils/saveRecentData';

const RecentButtons = ({
  setSearchQuery,
}: {
  setSearchQuery: React.Dispatch<React.SetStateAction<SearchQueries>>;
}) => {
  const searchHistory = getFromLocal();

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
    <motion.div
      variants={fadeIn('down', 0.2)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='flex items-center justify-center flex-wrap gap-2 '
    >
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
    </motion.div>
  );
};

export default RecentButtons;
