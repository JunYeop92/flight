import { FormEvent, Suspense, useState } from 'react'
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
    <Suspense fallback={<Loading />}>
      <SearchBar handleSubmit={handleSubmit} />
      {searchInput && <SearchResult searchInput={searchInput} />}
    </Suspense>
  )
}
