import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import { fromTimeState } from 'recoil/atom'
import { getFlightArriveApi } from 'services/flight'
import FlightList from 'components/FlightList'

export default function Arrive() {
  const fromTime = useRecoilValue(fromTimeState)
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
