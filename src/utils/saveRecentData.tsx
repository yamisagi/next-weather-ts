import { toast } from 'react-toastify';
const capitalize = (str: string | undefined) => {
  return str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : '';
};
const searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
export const saveToLocal = (searchQuery: SearchQueries) => {
  if (searchQuery?.q?.trim() === '') {
    const message = 'It seems like you are trying to save an empty location';
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
  } else if (searchHistory.includes(capitalize(searchQuery.q))) {
    return;
  } else {
    localStorage.setItem('searchQueries', JSON.stringify(searchQuery));
    if (searchQuery.q && !searchHistory.includes(capitalize(searchQuery.q))) {
      searchHistory.unshift(searchQuery.q);
      if (searchHistory.length > 5) {
        searchHistory.pop();
      }
      localStorage.setItem(
        'searchHistory',
        JSON.stringify(searchHistory.map((word: string) => capitalize(word)))
      );
    }
    const message = capitalize(searchQuery.q) + ' is added to recent searches';
    toast.success(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
  }
};
