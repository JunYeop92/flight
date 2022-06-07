import { Router } from 'express'
import airportRouter from './airportRouter'

const appRouter = Router()

appRouter.use('/airport', airportRouter)

export default appRouter
