import axios from 'axios'
import { IWeatherItem } from 'types/weather'

const FORECAST_END_POINT = 'https://api.openweathermap.org/data/2.5/forecast'

export const getWeatherApi = async (cityName: string): Promise<IWeatherItem[]> => {
  const res = await axios.get(FORECAST_END_POINT, {
    params: {
      appid: process.env.REACT_APP_WEATHER_API_KEY,
      units: 'metric',
      lang: 'kr',
      q: cityName,
    },
  })

  return res.data.list
}
