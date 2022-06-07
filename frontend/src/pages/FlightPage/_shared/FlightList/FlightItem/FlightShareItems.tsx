import cx from 'classnames'
import { getRandomColorName } from 'utils'
import styles from './flightShareItems.module.scss'
import { IFlightItem } from 'types/flight'
import FlightItem from './FlightItem'

interface IProps {
  items: IFlightItem[]
}

export default function FlightShareItems({ items }: IProps) {
  const colorName = getRandomColorName()
  return (
    <ul className={cx(styles.wrapper, styles[colorName])}>
      {items.map((item) => (
        <FlightItem key={`${item.estimatedDateTime}-${item.flightId}`} item={item} isAlone={false} />
      ))}
    </ul>
  )
}
