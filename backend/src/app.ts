import express from 'express'
import { config } from 'dotenv'
import mongoose from 'mongoose'
import appRouter from './routes'

config()
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI as string

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', appRouter)

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Successfully connected to mongodb'))
  .catch((e) => console.error(e))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
