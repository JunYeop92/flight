import { IFlightItem } from 'types/flight'
import styles from './flightItem.module.scss'

interface Props {
  item: IFlightItem
}

export default function FlightItem({ item }: Props) {
  const { estimatedDateTime, airport, airline, terminalId, gatenumber } = item

  return (
    <li className={styles.wrapper}>
      <div className={styles.t1}>{estimatedDateTime}</div>
      <div className={styles.t2}>{airport}</div>
      <div className={styles.t3}>{airline}</div>
      <div className={styles.t4}>{terminalId}</div>
      <div className={styles.t5}>{gatenumber}</div>
    </li>
  )
}
