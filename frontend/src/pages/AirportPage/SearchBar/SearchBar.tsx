import { useState, useRef, useEffect, FormEvent, ChangeEvent } from 'react'
import { SearchIcon } from 'assets/svgs'
import styles from './searchBar.module.scss'

interface IProps {
  handleSearchChange: (value: string) => void
}

export default function SearchBar({ handleSearchChange }: IProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState('')

  useEffect(() => {
    if (!inputRef.current) return
    inputRef.current.focus()
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSearchChange(value)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type='search' placeholder='도시를 입력하세요.' ref={inputRef} value={value} onChange={handleChange} />
      <button type='submit'>
        <SearchIcon fill='currentColor' />
      </button>
    </form>
  )
}
