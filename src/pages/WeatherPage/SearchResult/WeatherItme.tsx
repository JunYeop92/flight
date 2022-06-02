import dayjs from 'dayjs'
import { IWeatherItem } from 'types/weather'
import WeatherImg from './WeatherImg'
import styles from './weatherItme.module.scss'

interface IProps {
  data: IWeatherItem
}

export default function WeatherItme({ data }: IProps) {
  return (
    <li className={styles.wrapper}>
      <div className={styles.time}>
        <time dateTime={`${data.dt}`}>{dayjs(data.dt_txt).format('MMM, D')}</time>
        <time dateTime={`${data.dt}`}>{dayjs(data.dt_txt).format('ddd HH:mm')}</time>
      </div>

      <div className={styles.temp}>
        {Math.round(data.main.temp)}
        <span>℃</span>
      </div>

      {/* <div>
          <dt>습도</dt>
          <dd>{data.main.humidity}</dd>
        </div> */}

      <div className={styles.weather}>
        <div>
          <WeatherImg icon={data.weather[0].icon} />
        </div>
        {/* <div>{data.weather[0].description}</div> */}
      </div>
    </li>
  )
}
