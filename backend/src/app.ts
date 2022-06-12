import express from 'express'
import { config } from 'dotenv'
import mongoose from 'mongoose'
import path from 'path'
import appRouter from './routes'

config()
const { MONGO_URI, PORT } = process.env

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', appRouter)

mongoose
  .connect(MONGO_URI as string)
  .then(() => console.log('Successfully connected to mongodb'))
  .catch((e) => console.error(e))

app.use(express.static(path.join(__dirname, '../../frontend/build')))
app.use('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../../frontend/build/', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
