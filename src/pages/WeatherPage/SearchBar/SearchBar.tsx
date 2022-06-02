import { useState, useRef, useEffect, FormEvent, ChangeEvent } from 'react'
import styles from './searchBar.module.scss'
import { SearchIcon } from 'assets/svgs'

interface IProps {
  handleSubmit: (value: string) => (e: FormEvent<HTMLFormElement>) => void
}

export default function SearchBar({ handleSubmit }: IProps) {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!inputRef.current) return
    inputRef.current.focus()
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

  return (
    <form className={styles.form} onSubmit={handleSubmit(value)}>
      <input type='search' placeholder='Search City' ref={inputRef} value={value} onChange={handleChange} />
      <button type='submit'>
        <SearchIcon fill='currentColor' />
      </button>
    </form>
  )
}
