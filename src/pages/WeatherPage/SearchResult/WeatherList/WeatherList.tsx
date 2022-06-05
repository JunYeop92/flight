import { useQuery } from 'react-query'
import { getWeatherApi } from 'services/weather'
import styles from './weatherList.module.scss'
import WeatherItme from './WeatherItem/WeatherItem'

interface IProps {
  lat: number
  lon: number
}

export default function WeatherList({ lat, lon }: IProps) {
  const { data } = useQuery(['getWeatherApi', lat, lon], () => getWeatherApi({ lat, lon }), {
    suspense: true,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  })

  if (!data) return null
  return (
    <ul className={styles.wrppaer}>
      {data.map((d) => (
        <WeatherItme key={`${lat}-${lon}-${d.dt}`} data={d} />
      ))}
    </ul>
  )
}
