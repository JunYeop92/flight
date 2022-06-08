import { Schema, model } from 'mongoose'

const AirportSchema = new Schema({
  iata: String,
  name: String,
  nameKo: String,
  countryName: String,
  countryNameKo: String,
  cityName: String,
  cityNameKo: String,
  likeCount: Number,
})

export default model('Airport', AirportSchema)
