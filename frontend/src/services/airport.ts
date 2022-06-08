import axios from 'axios'

export const getAirportListApi = async (page: number) => {
  const res = await axios.get('/api/airport', {
    params: {
      page,
    },
  })

  return res.data
}
