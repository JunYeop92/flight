export interface IAirportItem {
  _id: string
  iata: string
  name: string
  nameKo: string
  countryName: string
  countryNameKo: string
  cityName: string
  cityNameKo: string
  likeCount: number
}

export interface IIncLikeParam {
  _id: string
  likeCount: number
}
