import { Request, Response } from 'express'
import Airport from '../../models/airport'

/*
  GET /api/airport
  query: { condition, search }
*/

type TCondition = 'ko' | 'en' | 'iata' | ''

export const getList = async (req: Request, res: Response) => {
  const { condition, search } = req.query

  const matchObj = {
    ko: { nameKo: new RegExp(search as string, 'i') },
    en: { name: new RegExp(search as string, 'i') },
    iata: { iata: (search as string).toUpperCase() },
    '': { nameKo: new RegExp(search as string, 'i') },
  }[condition as TCondition]

  try {
    const result = await Airport.aggregate([
      { $match: matchObj },
      {
        // join commentsDB
        $lookup: {
          from: 'comments',
          localField: '_id',
          foreignField: 'airportId',
          as: 'comments',
        },
      },
      {
        $project: {
          iata: 1,
          name: 1,
          nameKo: 1,
          countryNameKo: 1,
          cityName: 1,
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
