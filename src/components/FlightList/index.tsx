import { IFlightItem } from 'types/flight'
import styles from './flightList.module.scss'
import FlightItem from './FlightItem'

interface Props {
  dataList: IFlightItem[]
}

export default function FlightList({ dataList }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div className={styles.t1}>출발시간</div>
        <div className={styles.t2}>목적지</div>
        <div className={styles.t3}>항공사</div>
        <div className={styles.t4}>터미널</div>
        <div className={styles.t5}>탑승구</div>
      </div>

      <ul>
        {dataList.map((item) => (
          <FlightItem key={`${item.estimatedDateTime}-${item.flightId}`} item={item} />
        ))}
      </ul>
    </div>
  )
}
