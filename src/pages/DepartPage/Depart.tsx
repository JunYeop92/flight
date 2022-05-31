import { useQuery } from 'react-query'
import { getFlightDepartApi } from 'services/flight'
import FlightList from 'components/FlightList'
import useTimeInterval from 'hooks/useTimeInterval'

export default function Depart() {
  const fromTime = useTimeInterval(1000 * 60, 'HHmm')
  const { data } = useQuery(
    ['getFlightDepartApi', fromTime],
    () => getFlightDepartApi({ from_time: fromTime, to_time: '2400' }),
    {
      suspense: true,
    }
  )

  if (!data) return null
  return <FlightList dataList={data} />
}
