import { Request, Response } from 'express'
import Comment from '../../models/comment'

/*
  GET /api/comment
*/
export const getCommentList = async (req: Request, res: Response) => {
  try {
    const result = await Comment.find()
    res.send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

/*
  POST /api/comment
  body : { airportId, nickName, content }
*/
export const addComment = async (req: Request, res: Response) => {
  try {
    const comment = new Comment({
      ...req.body,
    })
    await comment.save()
    res.send(comment)
  } catch (err) {
    res.status(500).send(err)
  }
}

/*
  DELETE /api/comment/:id
*/
export const removeComment = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    await Comment.findByIdAndDelete(id)
    res.status(204).send()
  } catch (err) {
    res.status(500).send(err)
  }
}
