import { DateTime } from 'luxon';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5'; // This is the base url for the API

// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

export const getWeatherData = async (
  info: string,
  searchQueries: SearchQueries
) => {
  try {
    const url = new URL(BASE_URL + '/' + info);
    url.search = new URLSearchParams({
      ...searchQueries,
      appid: API_KEY as string,
      // In query string, appid is required. So, we need to add it to the search queries.
    }).toString();
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    console.log(response);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherIcon = (icon: string) => {
  return `http://openweathermap.org/img/wn/${icon}@2x.png`;
};

const transformData = (data: WeatherData) => {
  const formattedData = {
    city: data.name,
    country: data.sys.country,
    date: data.dt,
    humidity: data.main.humidity,
    icon: data.weather[0].icon,
    temperature: data.main.temp,
    description: data.weather[0].description,
    wind: data.wind.speed,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    timezone: data.timezone,
    temp_max: data.main.temp_max,
    temp_min: data.main.temp_min,
    lat: data.coord.lat.toString(),
    lon: data.coord.lon.toString(),
    feels_like: data.main.feels_like,
  };
  return formattedData;
};

const transformForecastData = (data: OneCallWeatherData) => {
  let { hourly, daily, timezone } = data;
  daily = daily.slice(1, 6).map((day) => {
    return {
      title: formatTime(day.dt ?? 0, timezone, 'cccc'),
      temp: day.temp?.day ?? 0,
      icon: day.weather?.[0]?.icon ?? '',
      ...day,
    } as Daily;
  });
  hourly = hourly.slice(1, 7).map((hour) => {
    return {
      title: formatTime(hour.dt ?? 0, timezone, 'HH:mm'),
      temp: hour.temp ?? 0,
      icon: hour.weather?.[0]?.icon ?? '',
    } as Hourly;
  });

  return { hourly, daily, timezone };
};

export const getFormattedData = async (searchQueries: SearchQueries) => {
  try {
    const formattedData = await getWeatherData('weather', searchQueries);
    const manipuledData = transformData(formattedData);
    const { lat, lon } = manipuledData;
    // We will use lat and lon to get the hourly and daily forecast onecall API.
    console.log(manipuledData);
    const formattedForecastData = await getWeatherData('onecall', {
      lat,
      lon,
      exclude: 'current,minutely,alerts',
      units: searchQueries.units,
    });
    const forecastData = transformForecastData(formattedForecastData);
    return { ...manipuledData, ...forecastData };
  } catch (error) {
    console.log(error);
  }
};

export const formatTime = (
  time: number|undefined,
  timezone: string|undefined,
  format = 'cccc, dd LLL yyyy'
) => DateTime.fromSeconds(time ?? 0).setZone(timezone).toFormat(format);

export const formatHour = (
  time: number | undefined,
  timezone: string | undefined
) =>
  DateTime.fromSeconds(time ?? 0)
    .setZone(timezone)
    .toFormat('HH:mm' as any);
