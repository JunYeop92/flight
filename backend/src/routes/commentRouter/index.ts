import { Router } from 'express'
import * as commentCtrl from './comment.ctrl'

const commentRouter = Router()

commentRouter.get('/', commentCtrl.getCommentList)
commentRouter.post('/', commentCtrl.addComment)
commentRouter.delete('/', commentCtrl.removeComment)

export default commentRouter
