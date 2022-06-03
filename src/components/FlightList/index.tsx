import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './flightList.module.scss'
import { IFlightItem } from 'types/flight'
import FlightItem from './FlightItem'

interface Props {
  dataList: IFlightItem[]
}

export default function FlightList({ dataList }: Props) {
  const [isDepart, setIsDepart] = useState(true)
  const location = useLocation()

  useEffect(() => {
    setIsDepart(!location.pathname.startsWith('/arrive'))
  }, [location])

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div className={styles.t1}>{isDepart ? '출발시간' : '도착시간'}</div>
        <div className={styles.t2}>{isDepart ? '목적지' : '출발지'}</div>
        <div className={styles.t3}>항공사</div>
        <div className={styles.t4}>터미널</div>
        <div className={styles.t5}>게이트</div>
      </div>

      <div className={styles.flightWrapper}>
        <ul>
          {dataList.map((item) => (
            <FlightItem key={`${item.estimatedDateTime}-${item.flightId}`} item={item} />
          ))}
        </ul>
      </div>
    </div>
  )
}
