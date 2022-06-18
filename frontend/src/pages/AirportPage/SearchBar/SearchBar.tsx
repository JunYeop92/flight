import { useState, useRef, useEffect, FormEvent, ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SearchIcon } from 'assets/svgs'
import styles from './searchBar.module.scss'
import Dropdown from 'components/Dropdown/Dropdown'

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchInput, setSearchInput] = useState(searchParams.get('search') || '')
  const dropdownData = ['ko', 'en', 'iata']
  const [condition, setCondition] = useState(searchParams.get('condition') || dropdownData[0])

  type TCondition = 'ko' | 'en' | 'iata'
  const conditionPlaceholder = {
    ko: '한글로 공항을 입력해주세요.',
    en: '영어로 공항을 입력해주세요.',
    iata: 'IATA 공항 코드를 입력해주세요.',
  }[condition as TCondition]

  useEffect(() => {
    if (!inputRef.current) return
    inputRef.current.focus()
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setSearchInput(e.currentTarget.value)
  const handleSelect = (value: string) => setCondition(value)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchParams({ condition, search: searchInput })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Dropdown dataList={dropdownData} value={condition} handleSelect={handleSelect} />
      <input
        type='search'
        placeholder={conditionPlaceholder}
        ref={inputRef}
        value={searchInput}
        onChange={handleChange}
      />
      <button type='submit'>
        <SearchIcon fill='currentColor' />
      </button>
    </form>
  )
}
