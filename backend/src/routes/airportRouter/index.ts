import { Router } from 'express'
import * as airportCtrl from './airport.ctrl'

const airportRouter = Router()

airportRouter.get('/', airportCtrl.getList)

export default airportRouter
