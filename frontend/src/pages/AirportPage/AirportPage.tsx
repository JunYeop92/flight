import { Suspense } from 'react'
import styles from './airportPage.module.scss'
import Loading from 'components/Loading/Loading'
import SearchBar from './SearchBar/SearchBar'
import AirportList from './AirportList/AirportList'

export default function AirportPage() {
  return (
    <>
      <SearchBar />
      <Suspense fallback={<Loading />}>
        <article className={styles.result}>
          <AirportList />
        </article>
      </Suspense>
    </>
  )
}
