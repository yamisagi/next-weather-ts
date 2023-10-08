import { formatHour } from './api';

export const changeBackground = (
  weatherData: WeatherDataParams | undefined
) => {
  if (!weatherData) return 'from-cyan-700 to-blue-700';
  const { date, timezone } = weatherData;
  const hour = formatHour(date, timezone);

  if (hour.includes('00:') || hour.includes('01:') || hour.includes('02:'))
    return {
      gradient: 'from-blue-900 to-gray-900',
      textGradient: 'from-blue-700 to-blue-500',
    };
  if (hour.includes('03:') || hour.includes('04:') || hour.includes('05:'))
    return {
      gradient: 'from-red-700 to-yellow-700',
      textGradient: 'from-red-400 to-yellow-400',
    };
  if (hour.includes('06:') || hour.includes('07:') || hour.includes('08:'))
    return {
      gradient: 'from-yellow-700 to-green-700',
      textGradient: 'from-yellow-400 to-green-400',
    };
  if (hour.includes('09:') || hour.includes('10:') || hour.includes('11:'))
    return {
      gradient: 'from-green-700 to-blue-700',
      textGradient: 'from-yellow-400 to-orange-200',
    };
  if (hour.includes('12:') || hour.includes('13:') || hour.includes('14:'))
    return {
      gradient: 'from-blue-700 to-purple-700',
      textGradient: 'from-blue-400 to-purple-400',
    };

  if (hour.includes('15:') || hour.includes('16:') || hour.includes('17:'))
    return {
      gradient: 'from-purple-700 to-pink-700',
      textGradient: 'from-purple-400 to-pink-400',
    };
  if (hour.includes('18:') || hour.includes('19:') || hour.includes('20:'))
    return {
      gradient: 'from-blue-700 to-purple-700',
      textGradient: 'from-blue-300 to-purple-300',
    };
  if (hour.includes('21:') || hour.includes('22:') || hour.includes('23:'))
    return {
      gradient: 'from-purple-700 to-pink-700',
      textGradient: 'from-purple-400 to-pink-400',
    };

  return {
    gradient: 'from-yellow-700 to-orange-700',
    textGradient: 'from-yellow-400 to-orange-400',
  };
};
