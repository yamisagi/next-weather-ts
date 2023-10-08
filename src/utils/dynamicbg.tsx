import { formatHour } from './api';

interface Gradient {
  gradient: string;
  textGradient: string;
}
export const changeBackground = (hour: string): Gradient => {
  const hourRegex = /(\d{2}):(\d{2})/;
  const hourToNumber = hour.match(hourRegex);
  if (!hour || !hourToNumber || hourToNumber.length < 3 || Number(hourToNumber[1]) < 0 || Number(hourToNumber[1]) > 23) {
    return {
      gradient: 'from-blue-900 to-gray-900',
      textGradient: 'from-blue-500 to-blue-300',
    };
  }

  const hourOfDay = Math.floor(Number(hourToNumber[1]));

  console.log(hourOfDay);

  const gradients = [
    {
      gradient: 'from-blue-900 to-gray-900',
      textGradient: 'from-blue-500 to-blue-300',
    }, // 00:00 - 02:59
    {
      gradient: 'from-red-700 to-yellow-700',
      textGradient: 'from-red-400 to-yellow-400',
    }, // 03:00 - 05:59
    {
      gradient: 'from-yellow-700 to-green-700',
      textGradient: 'from-yellow-400 to-green-400',
    }, // 06:00 - 08:59
    {
      gradient: 'from-green-700 to-blue-700',
      textGradient: 'from-orange-200 to-yellow-400',
    }, // 09:00 - 11:59
    {
      gradient: 'from-blue-700 to-purple-700',
      textGradient: 'from-blue-400 to-purple-400',
    }, // 12:00 - 14:59
    {
      gradient: 'from-purple-700 to-pink-700',
      textGradient: 'from-purple-400 to-pink-400',
    }, // 15:00 - 17:59
    {
      gradient: 'from-blue-700 to-purple-700',
      textGradient: 'from-purple-300 to-blue-300',
    }, // 18:00 - 20:59
    {
      gradient: 'from-purple-700 to-pink-700',
      textGradient: 'from-purple-400 to-pink-400',
    }, // 21:00 - 23:59
  ];

  console.log(gradients[Math.floor(hourOfDay / 3)]);

  return gradients[Math.floor(hourOfDay / 3)];
};
