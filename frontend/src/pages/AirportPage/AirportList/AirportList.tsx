import { useQuery } from 'react-query'

import { queryKeys } from 'utils'
import { getAirportApi } from 'services/airport'

import AirportItem from './AirportItem/AirportItem'
import styles from './airportList.module.scss'
import useAirportParams from 'hooks/useAirportParams'

export default function AirportList() {
  const { condition, search } = useAirportParams()
  const { data } = useQuery(queryKeys.airpostList(condition, search), () => getAirportApi({ condition, search }), {
    enabled: !!search,
  })

  if (!data) return null
  return (
    <ul className={styles.wrapper}>
      {data.map((d) => (
        <AirportItem key={d._id} data={d} />
      ))}
    </ul>
  )
}
