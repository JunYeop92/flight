import styles from './airportPage.module.scss'
import SearchBar from './SearchBar/SearchBar'
import AirportList from './AirportList/AirportList'
import AsyncBoundary from 'components/AsyncBoundary'

export default function AirportPage() {
  return (
    <>
      <SearchBar />
      <AsyncBoundary>
        <article className={styles.result}>
          <AirportList />
        </article>
      </AsyncBoundary>
    </>
  )
}
