import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import { fromTimeState } from 'recoil/atom'
import { getFlightDepartApi } from 'services/flight'
import FlightList from 'components/FlightList'

export default function Depart() {
  const fromTime = useRecoilValue(fromTimeState)
  const { data } = useQuery(
    ['getFlightDepartApi', fromTime],
    () => getFlightDepartApi({ from_time: fromTime, to_time: '2400' }),
    {
      suspense: true,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    }
  )

  if (!data) return null
  return <FlightList dataList={data} />
}
