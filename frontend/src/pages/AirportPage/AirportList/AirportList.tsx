import { useQuery } from 'react-query'

import { queryKeys } from 'utils'
import { getAirportApi } from 'services/airport'

import AirportItem from './AirportItem/AirportItem'
import styles from './airportList.module.scss'
import useAirportParams from 'hooks/useAirportParams'

export default function AirportList() {
  const { condition, search } = useAirportParams()
  const { data = [] } = useQuery(queryKeys.airpostList(condition, search), () => getAirportApi({ condition, search }), {
    enabled: !!search,
  })

  if (!search) return <div className={styles.none}>검색어를 입력해주세요!</div>
  if (!data.length) return <div className={styles.none}>검색 결과가 없습니다.</div>
  return (
    <ul className={styles.wrapper}>
      {data.map((d) => (
        <AirportItem key={d._id} data={d} />
      ))}
    </ul>
  )
}
