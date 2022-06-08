import axios from 'axios'
import { Request, Response } from 'express'

const END_POINT = 'http://apis.data.go.kr/B551177/StatusOfPassengerFlightsOdp'

export const getArrivalList = async (req: Request, res: Response) => {
  try {
    const result = await axios.get(`${END_POINT}/getPassengerArrivalsOdp`, {
      params: {
        serviceKey: process.env.FLIGHT_API_KEY,
        ...req.query,
        lang: 'K',
        type: 'json',
      },
    })
    res.send(result.data.response.body.items)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const getDepartureList = async (req: Request, res: Response) => {
  try {
    const result = await axios.get(`${END_POINT}/getPassengerDeparturesOdp`, {
      params: {
        serviceKey: process.env.FLIGHT_API_KEY,
        ...req.query,
        lang: 'K',
        type: 'json',
      },
    })
    res.send(result.data.response.body.items)
  } catch (err) {
    res.status(500).send(err)
  }
}
