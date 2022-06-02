import { axios } from 'hooks/worker'
import { ICoord, IGeoRes, IWeatherItem } from 'types/weather'

const FORECAST_END_POINT = 'https://api.openweathermap.org/data/2.5/forecast'

export const getWeatherApi = async (params: ICoord): Promise<IWeatherItem[]> => {
  const res = await axios.get(FORECAST_END_POINT, {
    params: {
      appid: process.env.REACT_APP_WEATHER_API_KEY,
      units: 'metric',
      lang: 'kr',
      ...params,
    },
  })

  return res.data.list
}

const GEO_END_POINT = 'http://api.openweathermap.org/geo/1.0/direct'

export const getGeoApi = async (q: string): Promise<IGeoRes> => {
  const res = await axios.get(GEO_END_POINT, {
    params: {
      appid: process.env.REACT_APP_WEATHER_API_KEY,
      q,
    },
  })

  return res.data[0]
}
