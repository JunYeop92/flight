import { Suspense } from 'react'
import styles from './weatherPage.module.scss'
import Loading from 'components/Loading/Loading'
import SearchBar from './SearchBar/SearchBar'
import SearchResult from './SearchResult/SearchResult'
import { useSearchParams } from 'react-router-dom'

export default function WeatherPage() {
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('search')

  return (
    <>
      <SearchBar />
      <Suspense fallback={<Loading />}>
        <div className={styles.result}>{searchQuery && <SearchResult searchInput={searchQuery} />}</div>
      </Suspense>
    </>
  )
}
