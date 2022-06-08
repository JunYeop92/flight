import { Router } from 'express'
import * as airportCtrl from './airport.ctrl'

const airportRouter = Router()

airportRouter.get('/', airportCtrl.getList)
airportRouter.patch('/:id', airportCtrl.incLike)

export default airportRouter
