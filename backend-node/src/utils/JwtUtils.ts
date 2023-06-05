import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()

const key = process.env.JWT_SECRET || 'secret-key'

if (!key) {
  throw new Error('JWT_KEY must be defined in environment')
}

interface TokenPayload {
  id: string
}

export const generateToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, key, { expiresIn: '4h' })
}

export const verifyToken = (token: string): TokenPayload | false => {
  try {
    return jwt.verify(token, key) as TokenPayload
  } catch (error) {
    return false
  }
}
