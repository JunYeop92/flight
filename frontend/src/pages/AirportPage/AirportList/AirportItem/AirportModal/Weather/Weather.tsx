import styles from './weather.module.scss'
import WeatherList from './WeatherList/WeatherList'
import AsyncBoundary from 'components/AsyncBoundary'

interface IProps {
  cityName: string
}

export default function Weather({ cityName }: IProps) {
  return (
    <section className={styles.wrapper}>
      <h3>시간별 날씨(3h)</h3>
      <AsyncBoundary>
        <WeatherList cityName={cityName} />
      </AsyncBoundary>
    </section>
  )
}
