import { queryKeys } from 'utils'
import { getFlightArriveApi } from 'services/flight'
import useFlightQuery from 'hooks/useFlightQuery'
import FlightList from '../_shared/FlightList/FlightList'

export default function FetchArrive() {
  const { data = [] } = useFlightQuery(queryKeys.arriveList, getFlightArriveApi)

  return <FlightList dataList={data} />
}
