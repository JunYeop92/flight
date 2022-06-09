import { Schema, model } from 'mongoose'

const CommentSchema = new Schema({
  airportId: Schema.Types.ObjectId,
  nickName: String,
  content: String,
  date: { type: Date, default: Date.now },
})

export default model('Comment', CommentSchema)
