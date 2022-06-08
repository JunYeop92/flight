import { Suspense, useState } from 'react'
import styles from './airportPage.module.scss'
import Loading from 'components/Loading/Loading'
import SearchBar from './SearchBar/SearchBar'
import AirportList from './AirportList/AirportList'

export default function AirportPage() {
  const [searchInput, setSearchInput] = useState('')

  const handleSearchChange = (value: string) => setSearchInput(value.trim())

  return (
    <>
      <SearchBar handleSearchChange={handleSearchChange} />
      <Suspense fallback={<Loading />}>
        <div className={styles.result}>
          <AirportList searchInput={searchInput} />
        </div>
      </Suspense>
    </>
  )
}
