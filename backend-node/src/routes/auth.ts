import { Router } from 'express'
import { login, register, renewToken } from '../controllers/auth'
import { body } from 'express-validator'
import { validateFields } from '../middlewares/expressValidator'
import { validateToken } from '../middlewares/validateToken'
export const router = Router()

// @route api/v1/auth
router.post(
  '/register',
  [
    body('username').notEmpty().withMessage('Username is required'),
    body('email')
      .isEmail()
      .withMessage('Email is invalid')
      .notEmpty()
      .withMessage('Email is required'),
    body('password')
      .notEmpty()
      .withMessage('Password is required')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters'),
    validateFields
  ],
  register
)
router.post(
  '/login',
  [
    body('email')
      .isEmail()
      .withMessage('Email is invalid')
      .notEmpty()
      .withMessage('Email is required'),
    body('password').notEmpty().withMessage('Password is required'),
    validateFields
  ],
  login
)

router.get('/renew-token', [validateToken], renewToken)
