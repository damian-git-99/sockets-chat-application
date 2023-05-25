import { Request, Response } from 'express'
import { UserModel } from '../models/User'
import { encryptPassword } from '../utils/passwordUtils'

// @route POST api/v1/auth/register
export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body

  const exists = await UserModel.findOne({ email })

  if (exists) {
    throw new Error('Email already exists')
  }

  const hashedPassword = encryptPassword(password)

  await UserModel.create({
    username,
    email,
    password: hashedPassword
  })

  res.json({
    ok: true
  })
}

// @route POST api/v1/auth/login
export const login = (req: Request, res: Response) => {
  res.json({
    ok: true
  })
}

// @route POST api/v1/auth/renew-token
export const renewToken = (req: Request, res: Response) => {
  res.json({
    ok: true
  })
}
