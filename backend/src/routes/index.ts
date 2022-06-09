import { Router } from 'express'
import airportRouter from './airportRouter'
import commentRouter from './commentRouter'
import scheduleRouter from './scheduleRouter'

const appRouter = Router()

appRouter.use('/airport', airportRouter)
appRouter.use('/schedule', scheduleRouter)
appRouter.use('/comment', commentRouter)

export default appRouter
