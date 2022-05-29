import { axios } from 'hooks/worker'
import { IFlightItem, IFlightApiParams } from 'types/flight'

const END_POINT = '/B551177/StatusOfPassengerFlightsOdp'

export const getFlightArriveApi = async (params: IFlightApiParams): Promise<IFlightItem[]> => {
  const res = await axios.get(`${END_POINT}/getPassengerArrivalsOdp`, {
    params: {
      serviceKey: process.env.REACT_APP_API_KEY,
      ...params,
      lang: 'K',
      type: 'json',
    },
  })

  return res.data.response.body.items
}

export const getFlightDepartApi = async (params: IFlightApiParams): Promise<IFlightItem[]> => {
  const res = await axios.get(`${END_POINT}/getPassengerDeparturesOdp`, {
    params: {
      serviceKey: process.env.REACT_APP_API_KEY,
      ...params,
      lang: 'K',
      type: 'json',
    },
  })

  return res.data.response.body.items
}
