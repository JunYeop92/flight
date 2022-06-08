import { useQuery } from 'react-query'
import { getAirportListApi } from 'services/airport'
import AirportItem from './AirportItem/AirportItem'
import styles from './airportList.module.scss'

export default function AirportList() {
  const page = 1
  const { data } = useQuery(['getAirportListApi', page], () => getAirportListApi(page), {
    suspense: true,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  })

  if (!data) return null
  return (
    <ul className={styles.wrapper}>
      {data.map((d) => (
        <AirportItem key={d.iata} data={d} />
      ))}
    </ul>
  )
}
