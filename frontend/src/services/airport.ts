import axios from 'axios'
import { IAirportItem, IAirportSearchParam, IIncLikeParam } from 'types/airport'

export const incLikeCntApi = async ({ _id, likeCount }: IIncLikeParam) => {
  const res = await axios.patch(`/api/airport/${_id}`, { likeCount })
  return res.data
}

export const getAirportApi = async (params: IAirportSearchParam): Promise<IAirportItem[]> => {
  const res = await axios.get('/api/airport', {
    params: {
      ...params,
    },
  })
  return res.data
}
