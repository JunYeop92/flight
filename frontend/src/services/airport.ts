import axios from 'axios'
import { IAirportItem, IIncLikeParam } from 'types/airport'

export const getAirportListApi = async (): Promise<IAirportItem[]> => {
  const res = await axios.get('/api/airport')
  return res.data
}

export const incLikeCntApi = async ({ _id, likeCount }: IIncLikeParam) => {
  const res = await axios.patch(`/api/airport/${_id}`, { likeCount })
  return res.data
}
