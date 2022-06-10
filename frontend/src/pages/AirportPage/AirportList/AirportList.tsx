import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { queryKeys } from 'utils'
import { getAirportListApi } from 'services/airport'

import AirportItem from './AirportItem/AirportItem'
import styles from './airportList.module.scss'
import { useSearchParams } from 'react-router-dom'

export default function AirportList() {
  const { data } = useQuery(queryKeys.airpostList, getAirportListApi, {
    suspense: true,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  })
  const [Items, setItems] = useState(data || [])
  const [searchParams] = useSearchParams()

  useEffect(() => {
    if (!data) return
    const searchQuery = searchParams.get('search')
    const condition = searchParams.get('condition')

    if (!searchQuery) {
      setItems(data)
      return
    }

    if (condition === 'iata') {
      const result = data.filter((item) => item.iata.includes(searchQuery))
      setItems(result)
      return
    }

    if (condition === 'en') {
      const result = data.filter((item) => item.name.includes(searchQuery))
      setItems(result)
      return
    }

    const result = data.filter((item) => item.nameKo.includes(searchQuery))
    setItems(result)
  }, [data, searchParams])

  return (
    <ul className={styles.wrapper}>
      {Items.map((d) => (
        <AirportItem key={d._id} data={d} />
      ))}
    </ul>
  )
}
