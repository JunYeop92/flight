import { useQuery } from 'react-query'
import { getFlightDepartApi } from 'services/flight'
import FlightList from 'components/FlightList'

export default function Depart() {
  const { data } = useQuery('getFlightDepartApi', () => getFlightDepartApi({ from_time: '1800', to_time: '2400' }))

  if (!data) return null
  return <FlightList dataList={data} />
}
