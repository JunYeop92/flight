import axios from 'axios'
import { IAddCommentParam, ICommentItem } from 'types/comment'

export const getCommentListApi = async (airportId: string): Promise<ICommentItem[]> => {
  const res = await axios.get('/api/comment', {
    params: {
      airportId,
    },
  })
  return res.data
}

export const addCommentApi = async ({ airportId, nickName, content }: IAddCommentParam) => {
  const res = await axios.post('/api/comment', { airportId, nickName, content })
  return res.data
}
