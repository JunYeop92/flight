import { IFlightItem } from 'types/flight'
import FlightItem from './FlightItem'
import styles from './flightShareItems.module.scss'

interface IProps {
  items: IFlightItem[]
}

export default function FlightShareItems({ items }: IProps) {
  return (
    <ul className={styles.wrapper}>
      {items.map((item) => (
        <FlightItem key={`${item.estimatedDateTime}-${item.flightId}`} item={item} isAlone={false} />
      ))}
    </ul>
  )
}
