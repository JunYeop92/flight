import { useQuery } from 'react-query'
import { getFlightArriveApi } from 'services/flight'
import FlightList from 'components/FlightList'

export default function Arrive() {
  const { data } = useQuery('getFlightArriveApi', () => getFlightArriveApi({ from_time: '1800', to_time: '2400' }))

  if (!data) return null
  return <FlightList dataList={data} />
}
