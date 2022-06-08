import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getAirportListApi } from 'services/airport'
import AirportItem from './AirportItem/AirportItem'
import styles from './airportList.module.scss'

interface IProps {
  searchInput: string
}

export default function AirportList({ searchInput }: IProps) {
  const { data } = useQuery(['getAirportListApi'], getAirportListApi, {
    suspense: true,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  })
  const [Items, setItems] = useState(data || [])

  useEffect(() => {
    if (!data) return
    if (searchInput === '') setItems(data)

    const result = data.filter((item) => item.nameKo.includes(searchInput))
    setItems(result)
  }, [data, searchInput])

  return (
    <ul className={styles.wrapper}>
      {Items.map((d) => (
        <AirportItem key={d.iata} data={d} />
      ))}
    </ul>
  )
}
