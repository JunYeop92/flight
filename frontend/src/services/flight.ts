import axios from 'axios'
import { IFlightItem, IFlightApiParams } from 'types/flight'

export const getFlightArriveApi = async (params: IFlightApiParams): Promise<IFlightItem[]> => {
  const res = await axios.get('/api/schedule/arrive', {
    params: {
      ...params,
    },
  })
  return res.data
}

export const getFlightDepartApi = async (params: IFlightApiParams): Promise<IFlightItem[]> => {
  const res = await axios.get('/api/schedule/arrive', {
    params: {
      ...params,
    },
  })
  return res.data
}
