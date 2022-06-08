import { Router } from 'express'
import airportRouter from './airportRouter'
import scheduleRouter from './scheduleRouter'

const appRouter = Router()

appRouter.use('/airport', airportRouter)
appRouter.use('/schedule', scheduleRouter)

export default appRouter
