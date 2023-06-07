import { Router } from 'express'
import { validateToken } from '../middlewares/validateToken'
import { getChat } from '../controllers/messages'
export const router = Router()

// @route api/v1/messages
router.get('/:fromId', validateToken, getChat)
