import { useEffect, useState } from 'react';
import { saveToLocal } from '../utils/saveRecentData';
import { getFormattedData } from '../services/api';
export const useWeatherData = (searchQuery: SearchQueries, units: string) => {
  const [weatherData, setWeatherData] = useState<WeatherDataParams>();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    saveToLocal(searchQuery);
    let timer: NodeJS.Timeout;
    const fetchWeatherData = async () => {
      const data = await getFormattedData({ ...searchQuery, units });
      setWeatherData(data!);
      console.log(data);
      setNotFound(false);
      timer = setTimeout(() => {
        if (!data) {
          setNotFound(true);
        }
      }, 5000);
    };
    fetchWeatherData();
    return () => clearTimeout(timer);
  }, [searchQuery, units]);

  return { weatherData, notFound };
};
