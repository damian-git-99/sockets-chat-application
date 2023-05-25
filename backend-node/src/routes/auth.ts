import { Router } from 'express'
import { login, register, renewToken } from '../controllers/auth'
export const router = Router()
// @route api/v1/auth
router.post('/register', register)
router.post('/login', login)
router.get('/renew-token', renewToken)
