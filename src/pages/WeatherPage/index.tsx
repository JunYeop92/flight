import { FormEvent, Suspense, useState } from 'react'
import styles from './weatherPage.module.scss'
import Loading from 'components/Loading/Loading'
import SearchBar from './SearchBar/SearchBar'
import SearchResult from './SearchResult/SearchResult'

export default function WeatherPage() {
  const [searchInput, setSearchInput] = useState('')

  const handleSubmit = (value: string) => (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchInput(value.trim())
  }

  return (
    <>
      <SearchBar handleSubmit={handleSubmit} />
      <Suspense fallback={<Loading />}>
        <div className={styles.result}>{searchInput && <SearchResult searchInput={searchInput} />}</div>
      </Suspense>
    </>
  )
}
