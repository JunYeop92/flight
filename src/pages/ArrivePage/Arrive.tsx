import { useQuery } from 'react-query'
import { getFlightArriveApi } from 'services/flight'
import FlightList from 'components/FlightList'
import useTimeInterval from 'hooks/useTimeInterval'

export default function Arrive() {
  const fromTime = useTimeInterval(1000 * 60 * 30, 'HHmm')
  const { data } = useQuery(
    ['getFlightArriveApi', fromTime],
    () => getFlightArriveApi({ from_time: fromTime, to_time: '2400' }),
    {
      suspense: true,
    }
  )

  if (!data) return null
  return <FlightList dataList={data} />
}
