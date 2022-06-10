import { useState, useRef, useEffect, FormEvent, ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SearchIcon } from 'assets/svgs'
import styles from './searchBar.module.scss'
import Dropdown from 'components/Dropdown/Dropdown'

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [value, setValue] = useState(searchParams.get('search') || '')

  useEffect(() => {
    if (!inputRef.current) return
    inputRef.current.focus()
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const searchQuery = searchParams.get('search')
    if (searchQuery === value) return
    setSearchParams({ search: value })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Dropdown />
      <input type='search' placeholder='도시를 입력하세요.' ref={inputRef} value={value} onChange={handleChange} />
      <button type='submit'>
        <SearchIcon fill='currentColor' />
      </button>
    </form>
  )
}
