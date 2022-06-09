export interface ICommentItem {
  _id: string
  airportId: string
  nickName: string
  content: string
  date: Date
}

export interface IAddCommentParam {
  airportId: string
  nickName: string
  content: string
}
