import { Request, Response } from 'express'
import { UserModel } from '../models/User'
import { encryptPassword, comparePasswords } from '../utils/passwordUtils'
import { generateToken } from '../utils/JwtUtils'

// @route POST api/v1/auth/register
export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body

  const exists = await UserModel.findOne({ email })

  if (exists) {
    throw new Error('Email already exists')
  }

  const hashedPassword = encryptPassword(password)

  const user = await UserModel.create({
    username,
    email,
    password: hashedPassword
  })

  const token = generateToken({ id: user.id })

  res.json({
    user: {
      username: user.username,
      email: user.email,
      id: user.id
    },
    token
  })
}

// @route POST api/v1/auth/login
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const user = await UserModel.findOne({ email })

  if (!user) {
    throw new Error('Invalid credentials')
  }

  if (!comparePasswords(password, user.password)) {
    throw new Error('Invalid credentials')
  }

  const token = generateToken({ id: user.id })

  res.json({
    user: {
      username: user.username,
      email: user.email,
      id: user.id
    },
    token
  })
}

// @route POST api/v1/auth/verify-token
export const verifyToken = (req: Request, res: Response) => {
  res.json({
    ok: true
  })
}
