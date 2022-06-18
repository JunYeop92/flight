import { queryKeys } from 'utils'
import { getFlightDepartApi } from 'services/flight'
import useFlightQuery from 'hooks/useFlightQuery'
import FlightList from '../_shared/FlightList/FlightList'

export default function FetchDepart() {
  const { data = [] } = useFlightQuery(queryKeys.departList, getFlightDepartApi)

  return <FlightList dataList={data} />
}
