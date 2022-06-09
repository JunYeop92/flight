import { Request, Response } from 'express'
import Airport from '../../models/airport'

/*
  GET /api/airport
*/

export const getList = async (req: Request, res: Response) => {
  try {
    const result = await Airport.aggregate([
      {
        // comments db join
        $lookup: {
          from: 'comments',
          localField: '_id',
          foreignField: 'airportId',
          as: 'comments',
        },
      },
      {
        $project: {
          name: 1,
          nameKo: 1,
          countryNameKo: 1,
          cityNameKo: 1,
          likeCount: 1,
          commentCount: { $size: '$comments' },
        },
      },
    ])
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
