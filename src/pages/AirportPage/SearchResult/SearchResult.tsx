import AirportItem from './AirportItem/AirportItem'
import styles from './searchResult.module.scss'

export default function SearchResult() {
  return (
    <ul className={styles.wrapper}>
      <AirportItem />
      <AirportItem />
    </ul>
  )
}
