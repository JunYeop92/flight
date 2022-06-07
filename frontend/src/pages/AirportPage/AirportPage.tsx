import Loading from 'components/Loading/Loading'
import { Suspense } from 'react'
import styles from './airportPage.module.scss'
import SearchBar from './SearchBar/SearchBar'
import SearchResult from './SearchResult/SearchResult'

export default function AirportPage() {
  return (
    <>
      <SearchBar />
      <Suspense fallback={<Loading />}>
        <div className={styles.result}>
          <SearchResult />
        </div>
      </Suspense>
    </>
  )
}
