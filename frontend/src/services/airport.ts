import axios from 'axios'
import { IAirportItem } from 'types/airport'

export const getAirportListApi = async (): Promise<IAirportItem[]> => {
  const res = await axios.get('/api/airport')
  return res.data
}
