import { Router } from 'express'
import * as scheduleCtrl from './schedule.ctrl'

const scheduleRouter = Router()

scheduleRouter.get('/arrive', scheduleCtrl.getArrivalList)
scheduleRouter.get('/depart', scheduleCtrl.getDepartureList)

export default scheduleRouter
