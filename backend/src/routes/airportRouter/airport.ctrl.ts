import { Request, Response } from 'express'
import Airport from '../../models/airport'

export const getList = async (req: Request, res: Response) => {
  try {
    const result = await Airport.find()
    res.send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}
