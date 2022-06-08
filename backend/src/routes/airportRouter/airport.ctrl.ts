import { Request, Response } from 'express'
import Airport from '../../models/airport'

/*
  GET /api/airport
*/

export const getList = async (req: Request, res: Response) => {
  try {
    const result = await Airport.find()
    res.send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

/*
  PATCH /api/airport/:id
  body : { likeCount }
*/

export const incLike = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const result = await Airport.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    res.send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}
