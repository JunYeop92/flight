import { Suspense } from 'react'
import styles from './weather.module.scss'
import Loading from 'components/Loading/Loading'
import WeatherList from './WeatherList/WeatherList'

interface IProps {
  cityName: string
}

export default function Weather({ cityName }: IProps) {
  return (
    <div className={styles.wrapper}>
      <h3>시간별 날씨(3h)</h3>
      <Suspense fallback={<Loading />}>
        <WeatherList cityName={cityName} />
      </Suspense>
    </div>
  )
}
