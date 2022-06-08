import axios from 'axios'
import { IAirportItem } from 'types/airport'

export const getAirportListApi = async (page: number): Promise<IAirportItem[]> => {
  const res = await axios.get('/api/airport', {
    params: {
      page,
    },
  })

  return res.data
}
