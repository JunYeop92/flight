export interface IAirportItem {
  _id: string
  name: string
  nameKo: string
  countryNameKo: string
  cityNameKo: string
  likeCount: number
  commentCount: number
}

export interface IIncLikeParam {
  _id: string
  likeCount: number
}
