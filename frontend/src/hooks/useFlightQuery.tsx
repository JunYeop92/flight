import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import { fromTimeState } from 'recoil/atom'
import { IFlightApiParams, IFlightItem } from 'types/flight'
import { queryKeys } from 'utils'

export default function useFlightQuery(
  key: typeof queryKeys.departList | typeof queryKeys.arriveList,
  getFlightApi: (params: IFlightApiParams) => Promise<IFlightItem[]>
) {
  const fromTime = useRecoilValue(fromTimeState)

  return useQuery(key(fromTime), () => getFlightApi({ from_time: fromTime, to_time: '2400' }))
}
