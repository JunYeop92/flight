import Loading from 'components/Loading/Loading'
import { Suspense } from 'react'
import { useQuery } from 'react-query'
import { getAirportListApi } from 'services/airport'
import styles from './airportPage.module.scss'
import SearchBar from './SearchBar/SearchBar'
import SearchResult from './SearchResult/SearchResult'

export default function AirportPage() {
  const page = 1
  const { data } = useQuery(['getAirportListApi', page], () => getAirportListApi(page), {
    suspense: true,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  })

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
