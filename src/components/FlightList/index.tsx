import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './flightList.module.scss'
import { IFlightItem } from 'types/flight'
import FlightItem from './FlightItem'
import FlightShareItems from './FlightShareItems'

interface IProps {
  dataList: IFlightItem[]
}

export default function FlightList({ dataList }: IProps) {
  const [flightDatas, setFlightDatas] = useState<(IFlightItem | IFlightItem[])[]>([])
  const [isDepart, setIsDepart] = useState(true)
  const location = useLocation()

  useEffect(() => {
    setIsDepart(!location.pathname.startsWith('/arrive'))
  }, [location])

  useEffect(() => {
    const result = dataList
      .reduce((acc: IFlightItem[][], cur) => {
        if (cur.codeshare === 'Slave') {
          const { length } = acc
          acc[length - 1].push(cur)
          return acc
        }

        return [...acc, [cur]]
      }, [])
      .map((item) => (item.length === 1 ? item[0] : item))
    setFlightDatas(result)
  }, [dataList])

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
        <ul className={styles.list}>
          {flightDatas.map((data: any) =>
            Array.isArray(data) ? (
              <FlightShareItems key={`Items-${data[0].estimatedDateTime}-${data[0].flightId}`} items={data} />
            ) : (
              <FlightItem key={`${data.estimatedDateTime}-${data.flightId}`} item={data} />
            )
          )}
        </ul>
      </div>
    </div>
  )
}
