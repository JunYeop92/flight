import dayjs from 'dayjs'
import styles from './weatherItem.module.scss'
import { IWeatherItem } from 'types/weather'
import WeatherImg from './WeatherImg'

interface IProps {
  data: IWeatherItem
}

export default function WeatherItem({ data }: IProps) {
  return (
    <li className={styles.wrapper}>
      <div className={styles.temp}>{Math.round(data.main.temp)}&deg;</div>
      <div className={styles.iconBox}>
        <WeatherImg icon={data.weather[0].icon} />
      </div>
      <div className={styles.date}>{dayjs(data.dt_txt).format('ddd, HH')}시</div>
    </li>
  )
}
