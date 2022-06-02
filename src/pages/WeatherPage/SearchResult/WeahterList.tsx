import { useQuery } from 'react-query'
import { getWeatherApi } from 'services/weather'
import styles from './weahterList.module.scss'
import WeatherItme from './WeatherItme'

interface IProps {
  lat: number
  lon: number
}

export default function WeahterList({ lat, lon }: IProps) {
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
