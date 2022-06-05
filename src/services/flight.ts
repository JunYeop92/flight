import { axios } from 'hooks/worker'
import { IFlightItem, IFlightApiParams } from 'types/flight'

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy'

export const getFlightArriveApi = async (params: IFlightApiParams): Promise<IFlightItem[]> => {
  const res = await axios.get(`${PROXY}/getPassengerArrivalsOdp`, {
    params: {
      serviceKey: process.env.REACT_APP_FLIGHT_API_KEY,
      ...params,
      lang: 'K',
      type: 'json',
    },
  })

  return res.data.response.body.items
}

export const getFlightDepartApi = async (params: IFlightApiParams): Promise<IFlightItem[]> => {
  const res = await axios.get(`${PROXY}/getPassengerDeparturesOdp`, {
    params: {
      serviceKey: process.env.REACT_APP_FLIGHT_API_KEY,
      ...params,
      lang: 'K',
      type: 'json',
    },
  })

  return res.data.response.body.items
}
