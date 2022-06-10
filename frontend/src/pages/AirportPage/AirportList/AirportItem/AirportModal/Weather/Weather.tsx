import { useQuery } from 'react-query'
import styles from './weather.module.scss'
import { queryKeys } from 'utils'
import { getWeatherApi } from 'services/weather'
import WeatherItem from './WeatherItem/WeatherItem'

interface IProps {
  cityName: string
}

export default function Weather({ cityName }: IProps) {
  const { data } = useQuery(queryKeys.weatherList(cityName), () => getWeatherApi(cityName), {
    suspense: true,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  })

  if (!data) return null
  return (
    <div className={styles.wrapper}>
      <h3>시간별 날씨(3h)</h3>
      <ul>
        {data.map((d) => (
          <WeatherItem key={d.dt} data={d} />
        ))}
      </ul>
    </div>
  )
}
